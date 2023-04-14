package main

import (
	"fmt"
	"log"
	"math/rand"
	"net/http"
	"time"

	"github.com/PuerkitoBio/goquery"
)

func main() {
	items := getMLItems("veiculos", "fusca")
	print("\n\nPrice Crawler:\n\n")
	for i, item := range items {
		fmt.Printf("Item %d\n %+v\n", i+1, item)
	}
}

func getMLItems(category, query string) []Item {
	url := fmt.Sprintf("https://lista.mercadolivre.com.br/%s/%s", category, query)
	// url := "https://www.mercadolivre.com.br/veiculos/#menu=categories"
	res := getResponse(url)
	items := []Item{}

	doc, err := goquery.NewDocumentFromReader(res.Body)
	if err != nil {
		log.Fatal(err)
	}

	doc.Find(".ui-search-layout__item").Each(func(i int, selection *goquery.Selection) {
		item := Item{}

		items = append(items, item)
	})
	return items
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
