import React, { useEffect, useState } from "react";
import ComProdutoCss from './ComProdutoCSS.module.css'
import { useParams } from "react-router-dom";
import Head from "../Head/Head";

const ComprarProduto = ()=>{
    const [produto, setProduto]=useState(null)
    const [loading, setLoading] =useState(false)
    const [error, setError] =useState(null)
    const {id} = useParams()
    
    useEffect(()=>{
        async function fetchProduto(url){
            try{
                setLoading(true)
                const resposta = fetch(url)
                const json = await (await resposta).json()
                setProduto(json)                
            }catch(erro){
                setError('Um erro ocorreu ' + erro)
            }finally{
                setLoading(false)
            }
            
        }
        fetchProduto(`https://ranekapi.origamid.dev/json/api/produto/${id}`)
    },[id])
    
    if(loading)  return <div>Loading</div>
    if(error) return <p>error</p>
    if(produto !== null)
    return(
        <section className={ComProdutoCss.containerProduto + ' animationLeft'}>
            <Head titulo={`Loja | ${produto.nome}`} description={`Loja | ${produto.descricao}`}/>
            <div className={ComProdutoCss.listaImagem}>
                {produto.fotos.map((imagem) =>(
                    <img 
                    src={imagem.src}
                    alt={imagem.descricao}
                    key={imagem.titulo}
                    />
                ))}
            </div>
            <div className={ComProdutoCss.conteudoProduto}>
                <h1>{produto.nome}</h1>
                <p>Preço: {produto.preco}</p>
                <p>Descrição: {produto.descricao}</p>
            </div>
        </section>
    )
}

export default ComprarProduto