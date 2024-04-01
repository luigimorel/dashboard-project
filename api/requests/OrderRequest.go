package requests

type OrderRequest struct {
	OrderId     string `json:"order_id"`
	OrderStatus string `json:"order_status"`
}
