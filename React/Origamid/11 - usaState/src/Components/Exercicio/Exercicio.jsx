// Os links abaixo puxam dados de um produto em formato JSON
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Crie uma interface com 3 botões, um para cada produto.
// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
// Mostre apenas um produto por vez
// Mostre a mensagem carregando... enquanto o fetch é realizado
import { useState } from 'react'
import './Exercicio.css'
import React from 'react'
import Botao from './Botao'



const Exercicio = (props)=>{

    const [botao, setBotao] = useState()

    function buscaAPI(){
        
        fetch('https://ranekapi.origamid.dev/json/api/produto/tablet')
        .then(response => response.json())
        .then(body => {
            
            
        })
    }


    

    return(
        <>
            <h3>Selecione um produto</h3>
            <div className='Exercicio'>
                <Botao setBotao={setBotao} botao={botao} value ={"tablet"}/>
                <Botao setBotao={setBotao} botao={botao} value ={"smartphone"}/>
                <Botao setBotao={setBotao} botao={botao} value ={"notebook"}/>
            </div>
        </>
    )
}

export default Exercicio