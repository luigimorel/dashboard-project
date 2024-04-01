package models

import "time"

type Customer struct {
	ID            uint      `gorm:"primaryKey" json:"id"`
	Name          string    `json:"name"`
	Address       string    `json:"address"`
	ContactNumber string    `json:"contact_number"`
	Photo         string    `json:"photo" gorm:"default:https://picsum.photos/200;type:text;"`
	Email         string    `json:"email"`
	CreatedAt     time.Time `json:"created_at"`
	UpdatedAt     time.Time `json:"updated_at"`
	DeletedAt     time.Time `json:"deleted_at"`
}
