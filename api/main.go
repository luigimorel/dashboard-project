package main

import (
	"log"
	"net/http"

	"github.com/joho/godotenv"
	"github.com/luigimorel/project/database"
	"github.com/luigimorel/project/routes"
)

func main() {
	err := godotenv.Load(".env")
	if err != nil {
		log.Fatal("Error loading .env file")
	}

	database.InitDatabase()

	router := routes.Routes()

	// Server
	err = http.ListenAndServe(":8080", router)
	if err != nil {
		log.Fatal("Error starting server: ", err)
	}
}
