package controllers

import (
	"encoding/json"
	"net/http"

	"github.com/luigimorel/project/database"
	"github.com/luigimorel/project/models"
)

func CreateStaff(w http.ResponseWriter, r *http.Request) {
	var staff models.Staff

	if err := json.NewDecoder(r.Body).Decode(&staff); err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	if err := database.DB.Create(&staff).Error; err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	json.NewEncoder(w).Encode(staff)
}

func FetchAllStaff(w http.ResponseWriter, r *http.Request) {
	var staff []models.Staff

	result := database.DB.Raw("SELECT * FROM staffs").Scan(&staff)

	if result.Error != nil {
		http.Error(w, result.Error.Error(), http.StatusInternalServerError)
		return
	}
	json.NewEncoder(w).Encode(staff)
}
