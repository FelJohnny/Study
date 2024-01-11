import React, { useContext } from "react";
import { GlobalContext } from "../GlobalContext/GlobalContext";

const Produdo = ()=>{

    const global = useContext(GlobalContext)

    if(global.produto!== null)//executa apenas apos o fetch
    console.log(global.produto)
    
    
    return(
        <>
        {global.produto&&
            <ul>
                {global.produto.map((produto, index)=><li key={index}>{produto.nome} Preço: {produto.preco}</li>)}
                
            </ul>
        }
            <button onClick={global.limpaDados}>Limpar Busca</button>
        </>
    )
}

export default Produdo