import React, { useEffect, useState } from "react";
import ProdutoCss from './Produto.module.css'
import Head from "../Head/Head";
import { Link } from "react-router-dom";

const Produto = ()=>{

    const [produtos, setProdutos]= useState(null)

    useEffect(()=>{
        async function API(){
            const endpoint = fetch('https://ranekapi.origamid.dev/json/api/produto')
            const json = await(await endpoint).json()
            setProdutos(json)
        }
        API()
    },[])

    if(produtos === null) return null
    return(
        <section className="animationLeft">
            <Head titulo="Loja | Produtos " description="Compre seu produto"/>
            <div className={ProdutoCss.listProd}>
                {produtos.map((produto) => (
                    <Link to={`produto/${produto.id}`} className={ProdutoCss.containerProd} key={produto.id}>
                        <img src={produto.fotos[0].src} alt={produto.descricao} />
                        <h3>{produto.nome}</h3>
                    </Link>
                ))}
            </div>
        </section>
    )
    
}

export default Produto