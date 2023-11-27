import './Exercicio.css'
import React from 'react';

const Produto = (props) => {
  return (
    <div className='produto'>
      <h1>{props.dados.nome}</h1>
      <p>R$ {props.dados.preco}</p>
      <img src={props.dados.fotos[0].src} alt={props.dados.fotos[0].titulo} />
    </div>
  );
};

export default Produto;
