package controllers

import (
	"encoding/json"
	"net/http"

	"github.com/luigimorel/project/database"
	"github.com/luigimorel/project/models"
)

func CreateCompany(w http.ResponseWriter, r *http.Request) {
	var company models.Company

	if err := json.NewDecoder(r.Body).Decode(&company); err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	if err := database.DB.Create(&company).Error; err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	json.NewEncoder(w).Encode(company)
}

func FetchAllCompanies(w http.ResponseWriter, r *http.Request) {
	var companies []models.Company

	result := database.DB.Raw("SELECT * FROM companies").Scan(&companies)

	if result.Error != nil {
		http.Error(w, result.Error.Error(), http.StatusInternalServerError)
		return
	}
	json.NewEncoder(w).Encode(companies)
}
