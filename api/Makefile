dev:
	nodemon --exec go run main.go --signal SIGTERM
test:
	go test -v ./...
lint:
	golangci-lint run ./...
build:
	go build main.go