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

	router.HandleFunc("/", Get).Methods(http.MethodGet)

	fmt.Println("listen at http://localhost:8000")
	log.Fatal(http.ListenAndServe(":8000", router))

}

func Get(w http.ResponseWriter, r *http.Request) {
	json.
		NewEncoder(w).
		Encode(
			crawler.Item{
				Description: "uma descrição do produto",
			},
		)
}
