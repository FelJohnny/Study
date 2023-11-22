import React, { useState } from "react"
import { ButtonModal } from "./Components/ButtonModal/ButtonModal";
import Modal from "./Components/Modal/Modal";
import Exercicio from "./Components/Exercicio/Exercicio";

function App() {

  const [ativo, setAtivo] = React.useState(true);
    
  const [dados, setDados] = useState({nome:'Johnny', idade:'30'})

  const [modal, setModal] = useState(false)

  function adicionarFacul(){
    setDados({...dados, faculdade:"possui faculdade"})
  }

  const produto = fetch('https://ranekapi.origamid.dev/json/api/produto/tablet')

  produto
      .then(resposta => resposta.json())
      .then(body => {
        console.log(body)
      })

      
  return (
    <>
      <button onClick={() => setAtivo(!ativo)}>
        {ativo ? 'Botão Ativo' : 'Botão Inativo'}
      </button>

      <p>{dados.nome}</p>
      <p>{dados.idade}</p>
      <p>{dados.faculdade}</p>
      <button onClick={adicionarFacul}>Botao</button>

      <h1>Modal com UseStates</h1>
      <div>
        <ButtonModal setModal={setModal}/>
        <Modal modal={modal} setModal={setModal}/>
        <Exercicio/>
        
      </div>



    </>

    

  );
};

export default App
