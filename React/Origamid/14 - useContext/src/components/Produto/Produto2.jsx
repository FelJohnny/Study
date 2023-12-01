import React, { useContext } from "react";
import { GlobalContext } from "../GlobalContext/GlobalContext";
const Produto = ()=>{
    
    const global = useContext(GlobalContext)
    console.log(global)
    return(
        <>
            <h1>Produto2</h1>
            <p>{global.carrinho}</p>
            <button onClick={()=> global.setCarrinho(carrinho => carrinho+1)}>click</button>

            
        </>
    )
}

export default Produto