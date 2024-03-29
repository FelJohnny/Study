import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import Pagina404 from './Components/Pagina404/Pagina404'
import Sobre from './Components/Sobre/SObre'
import Header from './Components/Header/Header'
import Contato from './Components/Contato/Contato'
import './app.css'

function App() {

  return (
    <BrowserRouter>
      <Header/>
      <div className='animationleft'>
        <Routes>
          <Route path="" element={<Home/>}/>
          <Route path="sobre" element={<Sobre/>}/>
          <Route path="contato/*" element={<Contato/>}/>
          <Route path="*" element={<Pagina404/>}/>
        </Routes>
      </div>
      <footer>
        <p>footer</p>
      </footer>
    </BrowserRouter>
  )
}

export default App
