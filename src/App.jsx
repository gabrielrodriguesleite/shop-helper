// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Card from './components/Card';
import { ITEMS } from './tests/mocks';
// import { getItems } from './tests/mocks';

const WEB = 'Todos,Mercado Livre,Buscapé'.split(',');
const CATEGORIES = 'Geladeira, TV, Celular'.split(',');

function App() {
  // getItems().then((i)=>console.log(i))
  // const item = {
  //   photo: "https://http2.mlstatic.com/fusca-4-mil-km-100-orig-1972-azul-sem-igual-p-placa-preta-D_NQ_NP_264711-MLB20612943516_032016-F.jpg",
  //   description: "Fusca 4 Mil Km 100% Orig 1972 Azul",
  //   category: "Carros",
  //   price: "10.000",
  //   website: "https://carro.mercadolivre.com.br/MLB-944438788-fusca-4-mil-km-100-orig-1972-azul-sem-igual-p-placa-preta-_JM",
  // }
  return (
    <main>
      <section className="search-bar">
        <span>Shop Helper</span>
        <input type="search" placeholder="Geladeira Frost Free 2 Portas" />
        <button type="button" onClick={() => console.log('click')}>Buscar</button>
      </section>

      <section className="category-section">
        <div>
          <label htmlFor="web">Web</label>
          <select name="web" id="web">
            {WEB.map((i) => (<option key={i} value={i}>{i}</option>))}
          </select>
        </div>

        <div>
          <label htmlFor="category">Categoria</label>
          <select name="category" id="category">
            {CATEGORIES.map((i) => (<option key={i} value={i}>{i}</option>))}
          </select>
        </div>
      </section>

      <section className='cards'>
        {ITEMS.map((i)=>(<Card key={i.website} item={i}/>))}
      </section>
    </main>
  );
}

export default App;
