import React from "react"
import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import Cadastrar from "./components/Cadastrar/Cadastrar"
import Pesquisa from "./components/Pesquisa/Pesquisa"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { GlobalStorage } from "./components/GlobalContext/GlobalContext"

function App(){

  return (
    <>
      <GlobalStorage>
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="" element={<Home/>}/>
            <Route path="cadastrar" element={<Cadastrar/>}/>
            <Route path="pesquisa" element={<Pesquisa/>}/>
          </Routes>
        </BrowserRouter>
      </GlobalStorage>
    </>
  )
}

export default App
