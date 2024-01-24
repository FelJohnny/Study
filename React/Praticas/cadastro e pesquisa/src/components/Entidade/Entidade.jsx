import React from 'react'
import { NavLink, Route, Routes, useParams } from 'react-router-dom'
import Pesquisa from '../Pesquisa/Pesquisa'
import Cadastrar from '../Cadastrar/Cadastrar'

const Entidade = () => {
    const params = useParams();
  return (
    <div>
        <h1>teste</h1>
        <nav>
            <NavLink to="pesquisa">Entidades</NavLink>
            <NavLink to="cadastrar">Cadastrar Entidade</NavLink>
        </nav> 
      <Routes>
        <Route path="pesquisa" element={<Pesquisa/>}/>
        <Route path="cadastrar" element={<Cadastrar/>}/>
      </Routes>
    </div>
  )
}

export default Entidade
