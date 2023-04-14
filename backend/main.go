package main

import (
	"fmt"
	"math/rand"
	"net/http"
	"time"
)

func main() {
	fmt.Println(getResponse("https://lista.mercadolivre.com.br/veiculos/fusca"))
}

type Item struct {
	Photo       string
	Description string
	Category    string
	Price       string
	Website     string
}

func getResponse(url string) *http.Response {
	time.Sleep(time.Duration(rand.Intn(5)))

	res, err := http.Get(url)
	if err != nil {
		panic(err)
	}

	if res.StatusCode != 200 {
		panic(fmt.Sprintf("status code error: %d %s", res.StatusCode, res.Status))
	}

	return res
}
