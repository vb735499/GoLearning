// main.go
package main

import (
    "fmt"
    "net/http"
    "encoding/json"
)

func main() {
    http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
        fmt.Fprintf(w, "Hello, World!")
    })
    http.HandleFunc("/api/data", dataHandler)
    http.ListenAndServe(":8080", nil)
}

type ApiResponse struct {
    Message string `json:"message"`
}

func dataHandler(w http.ResponseWriter, r *http.Request) {
    response := ApiResponse{Message: "Hello from the Golang API!"}
    json.NewEncoder(w).Encode(response)
}