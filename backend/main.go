package main

import (
	"fmt"

	"backend/crawler"
)

func main() {

	items := crawler.GetMLItems("veiculos", "fusca")

	print("\n\nPrice Crawler:\n\n")

	for i, item := range items {
		fmt.Printf("Item %d\n %+v\n", i+1, item)
	}

}
