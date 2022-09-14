import './App.css';
import Header from './components/header/Header';
import Contador from './components/header/Contador'

function App() {
  return (
    <div className="App">
      <h1>Rango</h1>
      <p>Ta com fome de que hoje?</p>
      <Header />
      <p>Pão Francês <Contador /> </p>
      <button>Carrinho</button>
    </div>
   );
    
}


export default App;
