// import logo from './logo.svg';
import './App.css';

const WEB = "Todos,Mercado Livre,Buscapé".split(",")
const CATEGORIES = "Geladeira, TV, Celular".split(",")

function App() {
  return (
    <main>
      <section className='search-bar'>
        <label>Shop Helper</label>
        <input type='search' placeholder='Geladeira Frost Free 2 Portas'></input>
        <button type='button' onClick={() => console.log("click")}>Buscar</button>
      </section>

      <section className='category-section'>
        <div>
          <label htmlFor='web'>Web</label>
          <select name='web' id='web'>
            {WEB.map((i, k) => (<option key={k} value={i}>{i}</option>))}
          </select>
        </div>

        <div>
          <label htmlFor='category'>Categoria</label>
          <select name='category' id='category'>
            {CATEGORIES.map((i, k) => (<option key={k} value={i}>{i}</option>))}
          </select>
        </div>
      </section>

      <section>
        cards
      </section>
    </main >
  );
}

export default App;
