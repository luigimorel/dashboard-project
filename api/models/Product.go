package models

import (
	"time"
)

type Product struct {
	ID          uint      `gorm:"primaryKey" json:"id"`
	Name        string    `json:"name"`
	Price       int       `json:"price"`
	Quantity    int       `json:"quantity"`
	CompanyId   uint      `json:"company_id"`
	Company     Company   `gorm:"foreignKey:CompanyId;references:ID;constraint: OnUpdate:CASCADE, OnDelete:RESTRICT;"`
	Description string    `json:"description" gorm:"type:text"`
	Photo       string    `json:"photo"`
	CreatedAt   time.Time `json:"created_at"`
	UpdatedAt   time.Time `json:"updated_at"`
	DeletedAt   time.Time `json:"deleted_at"`
}
