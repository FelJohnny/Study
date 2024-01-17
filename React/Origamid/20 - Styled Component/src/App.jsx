import React, { useState } from 'react'
import './App.css'
import styled from 'styled-components'

const Titulo = styled.h1`
  font-size: 2rem;
  color: Teal;
`

const Paragrafo = styled.p`
  color: green;
  font-weight: bold;
`
//via props
const Preco = styled.p`
  color: ${(props) => props.cor};
  font-weight: ${({teste})  => teste};

`


const BtnReativo = styled.button` //reativo useState
  cursor: pointer;
  padding: 5px 20px;
  background-color:${(props)=> props.ativo ? 'red':'blue'};
  color: ${(props)=> props.ativo ? 'black':'white'};

  &:hover{
    border-radius: 10px;
  }
  
`
function App() {
  
  const [ativo, setAtivo] = useState(false)

  return (
    <>
      <Titulo>meu titulo</Titulo>
      <Paragrafo>meu paragrafo</Paragrafo>
      <Preco cor="red" teste="bold">50</Preco>
      <BtnReativo ativo={ativo} onClick={() => setAtivo(!ativo)}>Clicar</BtnReativo>
    </>
  )
}

export default App
