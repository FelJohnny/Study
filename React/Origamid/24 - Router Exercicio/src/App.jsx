import React from 'react'
import './App.css'
import { BrowserRouter, Routes,Route  } from 'react-router-dom'
import Produto from './Components/Produtos/Produto'
import Contato from './Components/Contato/Contato'
import Header from './Components/Header/Header'
import ComprarProduto from './Components/ComprarProduto/ComprarProduto'

function App() {

  return (
    <>
    <BrowserRouter>
      <Header/>
      <div className='container'>
        <Routes>
          <Route path="" element={<Produto/>}/>
          <Route path="produto/:id" element={<ComprarProduto/>}/>
          <Route path="contato" element={<Contato/>}/>
        </Routes>
      </div>
    </BrowserRouter>
    </>
  )
}

export default App
