package controllers

import (
	"encoding/json"
	"net/http"

	"github.com/luigimorel/project/database"
	"github.com/luigimorel/project/models"
)

func CreateSupplier(w http.ResponseWriter, r *http.Request) {
	var supplier models.Supplier

	if err := json.NewDecoder(r.Body).Decode(&supplier); err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	if err := database.DB.Create(&supplier).Error; err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	json.NewEncoder(w).Encode(supplier)
}

func FetchAllSuppliers(w http.ResponseWriter, r *http.Request) {
	var suppliers []models.Supplier

	result := database.DB.Raw("SELECT * FROM suppliers").Scan(&suppliers)

	if result.Error != nil {
		http.Error(w, result.Error.Error(), http.StatusInternalServerError)
		return
	}
	json.NewEncoder(w).Encode(suppliers)
}
