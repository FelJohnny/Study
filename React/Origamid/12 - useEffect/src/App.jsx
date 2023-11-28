// Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
// https://ranekapi.origamid.dev/json/api/produto/notebook
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
// Defina o produto clicado como uma preferência do usuário no localStorage
// Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo


import React, { useEffect, useState } from "react"
import Produto from "./components/Produto/Produto"


function App() {

  const [prodPreferencia, setProdPreferencia] = useState(null)
  
    useEffect(()=>{// valida se contem produto no localStorage, se conter ele adiciona o produto de Preferencia
      const prodPrefLocal = window.localStorage.getItem('produto')
      if(prodPrefLocal !== null){
        setProdPreferencia(prodPrefLocal)
      }
       },[])


    useEffect(()=>{ //valida se prodPreferencia está vazio, se conter dados ele adiciona o dado.nonme no localstorage
      if(prodPreferencia !== null){
        window.localStorage.setItem('produto', prodPreferencia)

      }
    },[prodPreferencia])

    function handleclick(event){
      setProdPreferencia(event.target.innerText)
    }
      
  return (

    <>
      <h2>Preferencia: {prodPreferencia}</h2>
      <button onClick={handleclick}>notebook</button>
      <button onClick={handleclick}>smartphone</button>
      <Produto prodPreferencia={prodPreferencia}/>
      
    </>

  );
};

export default App
