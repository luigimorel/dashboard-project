package database

import (
	"fmt"
	"os"

	"github.com/luigimorel/project/models"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"
)

var (
	DB  *gorm.DB
	err error
)

func InitDatabase() {
	dbUser := os.Getenv("DB_USER")
	dbPassword := os.Getenv("DB_PASSWORD")
	dbHost := os.Getenv("DB_HOST")
	dbName := os.Getenv("DB_NAME")
	dbPort := os.Getenv("DB_PORT")

	dsn := dbUser + ":" + dbPassword + "@tcp(" + dbHost + ":" + dbPort + ")/" + dbName + "?charset=utf8mb4&parseTime=True&loc=Local"
	DB, err = gorm.Open(mysql.Open(dsn), &gorm.Config{
		Logger: logger.Default,
	})

	if err != nil {
		fmt.Printf("Error %s", err)
	} else {
		fmt.Println("Connected to the database!")
	}

	DB.AutoMigrate(
		&models.Customer{},
		&models.Company{},
		&models.Category{},
		&models.Product{},
		&models.Report{},
		&models.Order{},
		&models.Staff{},
		&models.Supplier{},
	)
}
