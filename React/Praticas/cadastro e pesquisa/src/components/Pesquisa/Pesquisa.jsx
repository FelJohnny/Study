import React, { useContext, useState } from 'react'
import { GlobalContext } from '../GlobalContext/GlobalContext'

const Pesquisa = () => {

  const {entidade} = useContext(GlobalContext)
  const [pesquisa, setPesquisa]=useState('')


  const filtrado = entidade.filter(pessoa =>{
    return pessoa.nome.includes(pesquisa)
  })

  return (
    <div>
      <h1>Pesquisa</h1>
      <input 
        type="text" 
        value={pesquisa} 
        onChange={({target})=> setPesquisa(target.value)}
      />
        <table >
          <thead>
            <tr>
              <th>Nome</th>
              <th>Idade</th>
              <th>Nota</th>
            </tr>
          </thead>
      {filtrado.map(pessoa =>(
        <tbody key={pessoa.nome}>
          <tr>
            <td>{pessoa.nome}</td>
            <td>{pessoa.idade}</td>
            <td>{pessoa.nota1}</td>
          </tr>
        </tbody>
      ))}
      </table>
    </div>
  )
}

export default Pesquisa
