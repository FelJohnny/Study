import React from "react"
import './App.css'
import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import Cadastrar from "./components/Cadastrar/Cadastrar"
import Pesquisa from "./components/Pesquisa/Pesquisa"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { GlobalStorage } from "./components/GlobalContext/GlobalContext"
import Entidade from "./components/Entidade/Entidade"

function App(){

  return (
    <>
      <GlobalStorage>
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="" element={<Home/>}/>
            <Route path="entidade/*" element={<Entidade/>}/>

          </Routes>
        </BrowserRouter>
      </GlobalStorage>
    </>
  )
}

export default App
