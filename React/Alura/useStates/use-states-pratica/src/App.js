import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

function App() {
  
  const [endereco, setEndereco] = useState({})

  return (
    <div className="App">
      <header className="App-header">
        
        <input type="text" placeholder='DIGITE O CEP' onChange={evento => setEndereco({cep: evento.target.value})}/>
        <li>CEP: {endereco.cep}</li>
        
      </header>
    </div>
  );
}

export default App;
