package main

import (
	"backend/crawler"
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	"github.com/gorilla/mux"
)

func main() {

	// items := crawler.GetMLItems("veiculos", "fusca")

	// print("\n\nPrice Crawler:\n\n")

	// for i, item := range items {
	// 	fmt.Printf("Item %d\n %+v\n", i+1, item)
	// }

	router := mux.NewRouter()

	router.HandleFunc("/", Post).Methods(http.MethodPost, http.MethodOptions)
	router.Use(mux.CORSMethodMiddleware(router))

	fmt.Println("listen at http://localhost:8000")
	log.Fatal(http.ListenAndServe(":8000", router))

}

func Post(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")

	// handle options request from browser verify request for post
	if r.Method == http.MethodOptions {
		return
	}

	var q Query
	json.NewDecoder(r.Body).Decode(&q)

	beautyPrint(q)

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(
		map[string][]crawler.Item{
			"items": crawler.GetMLItems(q.Category, q.Search),
		},
	)
}

type Query struct {
	Category string `json:"category"`
	Search   string `json:"search"`
	Website  string `jsoon:"website"`
}

func beautyPrint(a any) {
	i, err := json.MarshalIndent(a, "", "  ")
	if err != nil {
		fmt.Println(err)
	}
	fmt.Println(string(i))

}
