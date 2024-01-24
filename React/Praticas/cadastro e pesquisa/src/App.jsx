import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Cadastrar from "./components/Cadastrar/Cadastrar"
import Pesquisa from "./components/Pesquisa/Pesquisa"
import Header from "./components/Header/Header"
import { GlobalStorage } from "./components/GlobalContext/GlobalContext"

function App(){

  return (
    <>
      <GlobalStorage>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="" element={<Cadastrar/>}/>
            <Route path="pesquisa" element={<Pesquisa/>}/>
          </Routes>
        </BrowserRouter>
      </GlobalStorage>
    </>
  )
}

export default App
