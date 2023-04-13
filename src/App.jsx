// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Card from './components/Card';

const WEB = 'Todos,Mercado Livre,Buscapé'.split(',');
const CATEGORIES = 'Geladeira, TV, Celular'.split(',');

function App() {
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

      <section>
        <Card></Card>
      </section>
    </main>
  );
}

export default App;
