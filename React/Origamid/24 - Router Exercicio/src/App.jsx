import React from 'react'
import './App.css'
import { BrowserRouter, Routes,Route  } from 'react-router-dom'
import Produto from './Components/Produtos/Produto'
import Contato from './Components/Contato/Contato'
import Header from './Components/Header/Header'

function App() {
  console.log(document.title)

  return (
    <>
    <BrowserRouter>
      <Header/>
      <div className='container'>
        <Routes>
          <Route path="" element={<Produto/>}/>
          <Route path="contato" element={<Contato/>}/>
        </Routes>
      </div>
    </BrowserRouter>
    </>
  )
}

export default App
