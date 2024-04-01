package routes

import (
	"net/http"

	"github.com/gorilla/mux"
	"github.com/luigimorel/project/controllers"
	"github.com/luigimorel/project/middleware"
)

func Routes() *mux.Router {
	router := mux.NewRouter()
	cors := middleware.CorsMiddleware(router)

	// Products
	router.HandleFunc("/products", controllers.CreateProduct).Methods("POST")
	router.HandleFunc("/products", controllers.FetchAllProducts).Methods("GET")
	router.HandleFunc("/products/{id}", controllers.FetchProduct).Methods("GET")
	router.HandleFunc("/products/{id}", controllers.UpdateProduct).Methods("PUT")
	router.HandleFunc("/products/{id}", controllers.DeleteProduct).Methods("DELETE")

	// Companies
	router.HandleFunc("/companies", controllers.CreateCompany).Methods("POST")
	router.HandleFunc("/companies", controllers.FetchAllCompanies).Methods("GET")

	// Customers
	router.HandleFunc("/customers", controllers.CreateCustomer).Methods("POST")
	router.HandleFunc("/customers", controllers.FetchAllCustomers).Methods("GET")

	// Orders
	router.HandleFunc("/orders", controllers.CreateOrder).Methods("POST")
	router.HandleFunc("/orders", controllers.FetchAllOrders).Methods("GET")

	// Staff
	router.HandleFunc("/staff", controllers.CreateStaff).Methods("POST")
	router.HandleFunc("/staff", controllers.FetchAllStaff).Methods("GET")

	// Suppliers
	router.HandleFunc("/suppliers", controllers.CreateSupplier).Methods("POST")
	router.HandleFunc("/suppliers", controllers.FetchAllSuppliers).Methods("GET")

	// Categories
	router.HandleFunc("/categories", controllers.CreateCategory).Methods("POST")
	router.HandleFunc("/categories", controllers.FetchAllCategories).Methods("GET")

	// Reports
	router.HandleFunc("/reports", controllers.CreateReport).Methods("POST")
	router.HandleFunc("/reports", controllers.FetchAllReports).Methods("GET")
	// Server
	http.ListenAndServe(":8080", cors)

	return router
}
