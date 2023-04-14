package crawler

import (
	"fmt"
	"log"
	"math/rand"
	"net/http"
	"time"

	"github.com/PuerkitoBio/goquery"
)

type Item struct {
	Photo       string
	Description string
	Category    string
	Price       string
	Website     string
}

func GetMLItems(category, query string) []Item {
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

		item.Category = category

		// selecionando o link
		link, has := selection.Find("a").Attr("href")
		if has {
			item.Website = link
		}

		// selecionando o link da imagem
		imgURL, has := selection.Find("img").Attr("data-src")
		if has {
			item.Photo = imgURL
		}

		// selecionando a descrição
		description, has := selection.Find("a").Attr("title")
		if has {
			item.Description = description
		}

		// selecionando o preço
		item.Price = selection.Find(".price-tag-symbol").Text() + selection.Find(".price-tag-fraction").Text()

		items = append(items, item)

	})

	// TODO: keep going through the pages
	return items
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
