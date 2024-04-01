package controllers

import (
	"encoding/json"
	"net/http"

	"github.com/luigimorel/project/database"
	"github.com/luigimorel/project/models"
)

func CreateOrder(w http.ResponseWriter, r *http.Request) {
	var order models.Order

	if err := json.NewDecoder(r.Body).Decode(&order); err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	if err := database.DB.Create(&order).Error; err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	json.NewEncoder(w).Encode(order)
}

func FetchAllOrders(w http.ResponseWriter, r *http.Request) {
	var orders []models.Order

	if err := database.DB.Model(&models.Order{}).Preload("Customer").Preload("Product").Find(&orders).Error; err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(orders)
}
