import React, { useContext, useState } from 'react'
import { GlobalContext } from '../GlobalContext/GlobalContext'
import styled from 'styled-components'


const Section = styled.section`
  padding: 20px 50px;
  &>h1{
    font-size:2rem;
    padding-bottom:20px;

  }
`
const InputPesquisa = styled.input`
  width:80%;
  height:20px;
  padding: 5px 12px;
  font-size:1.2rem;
  border-radius:10px;
`
const Table = styled.table`
  &>thead>tr>th{
    background:red;
    padding-top:20px;
    width:1000px;
  }
`

const Pesquisa = () => {

  const {entidade} = useContext(GlobalContext)
  const [pesquisa, setPesquisa]=useState('')


  const filtrado = entidade.filter(pessoa =>{
    return pessoa.nome.includes(pesquisa)
  })

  return (
    <Section>
      <h1>Entidade</h1>
      <InputPesquisa 
        type="text" 
        value={pesquisa}
        placeholder='Digite o Nome'
        onChange={({target})=> setPesquisa(target.value)}
      />
        <Table >
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
      </Table>
    </Section>
  )
}

export default Pesquisa
