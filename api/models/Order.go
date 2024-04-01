package models

type Order struct {
	ID         uint     `gorm:"primaryKey" json:"id"`
	CustomerId uint     `json:"customer_id"`
	Customer   Customer `json:"customer" gorm:"foreignKey:CustomerId;references:ID;constraint: OnUpdate:CASCADE, OnDelete:RESTRICT;"`
	ProductId  uint     `json:"product_id"`
	Status     string   `json:"status"`
	Product    Product  `json:"product" gorm:"foreignKey:ProductId;references:ID;constraint: OnUpdate:CASCADE, OnDelete:RESTRICT;"`
	Quantity   int      `json:"quantity"`
}
