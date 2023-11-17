import React from "react"
import Exercicio from "./components/Exercicio";

const App = () => {

  const filmes = ['filme1', 'filme2', 'filme3']

    const livros = [
      { nome: 'A Game of Thrones', ano: 1996 },
      { nome: 'A Clash of Kings', ano: 1998 },
      { nome: 'A Storm of Swords', ano: 2000 },
    ];

  return (
    <>
        <ul>{filmes.map(filme => (
          <li key={filme}>{filme}</li>
        ))}</ul>


        <ul>
          {livros.map(livro =>(
            <li key={livro.nome}>nome: {livro.nome}, ano: {livro.ano}</li>
          ))}
        </ul>

        <h3>ou desestruturando o objeto em map{"({nome, ano})"} chaves:</h3>

        <ul>
          {livros.map(({nome, ano}) =>(
            <li key={nome}>nome: {nome}, ano: {ano}</li>
          ))}
        </ul>
        <Exercicio/>
    </>
    
  )
}

export default App
