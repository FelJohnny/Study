import './App.css';
import { useState } from 'react'

function App() {
  
  const [endereco, setEndereco] = useState({})

  function manipularEndereco(evento){
    
    const cep = evento.target.value
    setEndereco({cep})

    if(cep && cep.length === 8){
      //obter cep
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(resposta => resposta.json())
      .then(dados =>{
        setEndereco(enderecoCepAntigo =>{
          return{
            ...enderecoCepAntigo,
            rua: dados.logradouro,
            bairro: dados.bairro,
            cidade: dados.localidade,
            uf: dados.uf
          
          }
        })
      })
    }
  }


  return (
    <div className="App">
      <header className="App-header">
        
        <input type="text" placeholder='DIGITE O CEP' onChange={manipularEndereco}/>
        <li>CEP: {endereco.cep}</li>
        <li>Rua: {endereco.rua}</li>
        <li>Bairro: {endereco.bairro}</li>
        <li>Cidade: {endereco.cidade}</li>
        <li>UF: {endereco.uf}</li>
        
      </header>
    </div>
  );
}

export default App;
