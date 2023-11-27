// Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
// https://ranekapi.origamid.dev/json/api/produto/notebook
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
// Defina o produto clicado como uma preferência do usuário no localStorage
// Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo


import React, { memo, useEffect, useState } from "react"
import Produto from "./components/Produto/Produto"

function App() {

  const [carregando, setCarregando] = useState(false)
  const [dados, setDados] = useState(null)
  

    async function buscaAPI(event){
      
      setCarregando(true)
      const produtoText = event.target.innerText
      const Produto = fetch(`https://ranekapi.origamid.dev/json/api/produto/${produtoText}`)
      const json = await (await Produto).json()
      setTimeout(()=>{
        setCarregando(false)
        setDados(json)
      },1000)
    }
    

    useEffect(()=> {
      const MemoriaProduto = window.localStorage.getItem('produto')
      if(MemoriaProduto !== null){
        setDados(MemoriaProduto)
      }
    })

    useEffect(()=>{ //executa quando o estado "dados" for chamado
      if(dados !== null){ //se dados for diferente de vazio executa
        window.localStorage.setItem('produto', dados) // seta no local storage do navegador a chave 'produto' com valor dados.nome
      }
    },[dados])
  

      
  return (

    <>
      <button onClick={buscaAPI}>notebook</button>
      <button onClick={buscaAPI}>smartphone</button>
      {carregando ? 'Carregando..' : ''}
      {!carregando && dados && <Produto dados={dados} /> }
    </>

  );
};

export default App
