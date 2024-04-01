package controllers

import (
	"encoding/json"
	"net/http"

	"github.com/luigimorel/project/database"
	"github.com/luigimorel/project/models"
)

func CreateCustomer(w http.ResponseWriter, r *http.Request) {
	var customer models.Customer

	if err := json.NewDecoder(r.Body).Decode(&customer); err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	if err := database.DB.Create(&customer).Error; err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	json.NewEncoder(w).Encode(customer)
}

func FetchAllCustomers(w http.ResponseWriter, r *http.Request) {
	var customers []models.Customer

	result := database.DB.Raw("SELECT * FROM customers").Scan(&customers)

	if result.Error != nil {
		http.Error(w, result.Error.Error(), http.StatusInternalServerError)
		return
	}
	json.NewEncoder(w).Encode(customers)
}
