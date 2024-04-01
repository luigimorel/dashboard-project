package controllers

import (
	"encoding/json"
	"net/http"
	"strconv"

	"github.com/gorilla/mux"
	"github.com/luigimorel/project/database"
	"github.com/luigimorel/project/models"
)

func CreateProduct(w http.ResponseWriter, r *http.Request) {
	var product models.Product

	if err := json.NewDecoder(r.Body).Decode(&product); err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	if err := database.DB.Create(&product).Error; err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	json.NewEncoder(w).Encode(product)
}

func FetchAllProducts(w http.ResponseWriter, r *http.Request) {
	var products []models.Product

	result := database.DB.Raw("SELECT * FROM products").Scan(&products)

	if result.Error != nil {
		http.Error(w, result.Error.Error(), http.StatusInternalServerError)
		return
	}
	json.NewEncoder(w).Encode(products)
}

func UpdateProduct(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	id := vars["id"]

	if id == "" {
		http.Error(w, "Product ID is required", http.StatusBadRequest)
		return
	}

	productID, _ := strconv.Atoi(id)

	var product models.Product
	if err := json.NewDecoder(r.Body).Decode(&product); err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	var existingProduct models.Product
	if err := database.DB.First(&existingProduct, productID).Error; err != nil {
		http.Error(w, "Product not found", http.StatusNotFound)
		return
	}

	existingProduct.Name = product.Name
	existingProduct.Price = product.Price
	existingProduct.Description = product.Description
	existingProduct.Quantity = product.Quantity
	existingProduct.Photo = product.Photo

	query := `
        UPDATE products
        SET name = ?, price = ?, description = ?, quantity = ?, photo = ?
        WHERE id = ?
    `

	if err := database.DB.Exec(query, existingProduct.Name, existingProduct.Price, existingProduct.Description, existingProduct.Quantity, existingProduct.Photo, productID).Error; err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	json.NewEncoder(w).Encode(product)
}

func DeleteProduct(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	id := vars["id"]

	if id == "" {
		http.Error(w, "Product ID is required", http.StatusBadRequest)
		return
	}

	productID, _ := strconv.Atoi(id)

	// Construct the SQL query string
	query := `DELETE FROM products WHERE id = ?;`
	if err := database.DB.Exec(query, productID).Error; err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.WriteHeader(http.StatusOK)

	w.Write([]byte("Product successfully deleted"))
}

func FetchProduct(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	id := vars["id"]

	if id == "" {
		http.Error(w, "Product ID is required", http.StatusBadRequest)
		return
	}

	productID, _ := strconv.Atoi(id)

	var product models.Product
	if err := database.DB.Raw("SELECT * FROM products WHERE id = ?", productID).Scan(&product).Error; err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.WriteHeader(http.StatusOK)

	json.NewEncoder(w).Encode(product)
}
