// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Card from './components/Card';

import { getItems } from './services';
// import { getItems } from './tests/mocks';

const WEB = 'Todos,Mercado Livre,Buscapé'.split(',');
const CATEGORIES = 'Geladeira,TV,Celular'.split(',');

function App() {
  const [web, setWeb] = useState(WEB[0]);
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [search, setSearch] = useState('');
  const [items, setItems] = useState([]);
  const [ready, setReady] = useState(false);

  const receivedItems = (i) => {
    setItems(i);
    setReady(true);
  };

  return (
    <main>

      {/* ========== SEARCH AREA ========== */}
      <section className="search-bar">
        <span>Shop Helper</span>

        <input
          type="search"
          placeholder="Geladeira Frost Free 2 Portas"
          onChange={({ target }) => setSearch(target.value)}
          value={search}
        />

        <button
          type="button"
          disabled={search == ''}
          onClick={() => getItems(web, category, search, receivedItems)}
        >
          Buscar
        </button>
      </section>

      <section className="category-section">
        <div>
          <label htmlFor="web">Web</label>
          <select
            name="web"
            id="web"
            onChange={({ target }) => setWeb(target.value)}
            value={web}
          >
            {WEB.map((i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="category">Categoria</label>
          <select
            name="category"
            id="category"
            onChange={({ target }) => setCategory(target.value)}
            value={category}
          >
            {CATEGORIES.map((i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </select>
        </div>
      </section>

      {/* ========== CARDS AREA ========== */}
      <section className="cards">
        {ready && !items.length ? <div>Tente outra pesquisa.</div> : null}
        {items.map((i) => (
          <Card key={i.website} item={i} />
        ))}
      </section>
    </main>
  );
}

export default App;
