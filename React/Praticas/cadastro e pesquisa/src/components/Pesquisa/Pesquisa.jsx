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
      {filtrado.map(pessoa =>(
        <div key={pessoa.nome}>
          <h1>{pessoa.nome}</h1>
          <h2>{pessoa.idade}</h2>
          <h2>{pessoa.nota1}</h2>
        </div>
      ))}
    </div>
  )
}

export default Pesquisa
