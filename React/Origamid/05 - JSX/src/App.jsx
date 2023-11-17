import React from "react"
import Exercicio from "./components/Exercicio";

const App = () => {
  const nome = 'johnny';
  const random =  Math.random();
  const ativo =true;

  const carro ={
    nome: 'carro',
    roda: 4,
  }
  return (
    <>
      <Exercicio/>
      <a className="ativo" href="/">{nome}</a>
      <p>{random * 100 / 50}</p>
      <p className={ativo ? 'ativo' : 'inativo'}>aaa</p>
      <p>{new Date().getFullYear()}</p>
      <p>{carro.roda}</p>
      <p>{carro.nome}</p>
      

    </>
    
  )
}

export default App
