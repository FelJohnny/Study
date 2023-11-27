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
import Produto from './Produto'



const Exercicio = ()=>{

    const [carregando, setCarregando] = useState(null)
    const [dados, setDados] = React.useState(null);

    async function buscaAPI(event){
        setCarregando(true)
        const resposta = fetch(`https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`)
        const json = await (await resposta).json()         
        setTimeout(()=>{
            setDados(json);
            setCarregando(false);
        },1000)
        
    }
    
    return(
        <>
            <h3>Selecione um produto</h3>
            <div className='Exercicio'>
                <button onClick={buscaAPI}>tablet</button>
                <button onClick={buscaAPI}>smartphone</button>
                <button onClick={buscaAPI}>notebook</button>
                {carregando && <p>carregando...</p>}
                <br />
            </div>
                {!carregando && dados && <Produto dados={dados}/>}
        </>
    )
}

export default Exercicio