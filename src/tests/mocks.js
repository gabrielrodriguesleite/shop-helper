export const ITEMS = [
  {
    photo: "https://http2.mlstatic.com/fusca-4-mil-km-100-orig-1972-azul-sem-igual-p-placa-preta-D_NQ_NP_264711-MLB20612943516_032016-F.jpg",
    description: "Fusca 4 Mil Km 100% Orig 1972 Azul",
    category: "Carros",
    price: "10.000",
    website: "https://carro.mercadolivre.com.br/MLB-944438788-fusca-4-mil-km-100-orig-1972-azul-sem-igual-p-placa-preta-_JM",
  },
  {
    photo: "https://i.pinimg.com/originals/4c/27/e7/4c27e78b7cba1f5dba8e07edf52a52fd.jpg",
    description: "STANCENATION HAWAII MEET & GREET",
    category: "Carros",
    price: "12.789",
    website: "https://www.pinterest.com/pin/518688082065564649/",
  },
  {
    photo: "https://1.bp.blogspot.com/-KWIhX2lu8OM/ULATmvWiJlI/AAAAAAAACeg/0lhkswJHqwM/s1600/14211_166732803467230_1661700307_n.jpg",
    description: "(o\\_!_/o) .:Fusca Clube de Áurea:",
    category: "Carros",
    price: "8.300",
    website: "https://fuscaclubeaurea.blogspot.com/2012/11/fusca-azul-01.html",
  },
  {
    photo: "https://2.bp.blogspot.com/-o7zL37WPMrQ/ULIq6h651fI/AAAAAAAAsIs/TQBRByQiayA/s1600/Novo-Fusca-2013-Azul-Recife+(3).JPG",
    description: "Volkswagen Fusca 2013",
    category: "Carros",
    price: "125.000",
    website: "https://www.car.blog.br/2012/11/volkswagen-fusca-2013-tem-preco-de-r.html",
  }
]

export const getItems = () => { return new Promise((resolve) => { resolve(ITEMS) }) }