package controllers

import (
	"encoding/json"
	"net/http"

	"github.com/luigimorel/project/database"
	"github.com/luigimorel/project/models"
)

func CreateCategory(w http.ResponseWriter, r *http.Request) {
	var category models.Category

	if err := json.NewDecoder(r.Body).Decode(&category); err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	if err := database.DB.Create(&category).Error; err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	json.NewEncoder(w).Encode(category)
}

func FetchAllCategories(w http.ResponseWriter, r *http.Request) {
	var categories []models.Category

	result := database.DB.Raw("SELECT * FROM categories").Scan(&categories)

	if result.Error != nil {
		http.Error(w, result.Error.Error(), http.StatusInternalServerError)
		return
	}
	json.NewEncoder(w).Encode(categories)
}
