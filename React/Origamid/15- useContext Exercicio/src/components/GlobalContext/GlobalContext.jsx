import React, { useState, createContext } from "react";
import { useEffect } from "react";


export const GlobalContext = createContext()

export const GlobalStorage = ({children})=>{
    
    const [produto, setProduto]=useState(null)
    

    useEffect(()=>{

        async function produtosApi(){
            const api = fetch("https://ranekapi.origamid.dev/json/api/produto/")
            const resposta = await (await api).json()
            setProduto(resposta)
        }
        produtosApi()
    },[])
    
    function limpaDados(){
        setProduto(null)
    }
    

    return(
        <GlobalContext.Provider value={{produto, setProduto, limpaDados}}>
            {children}
        </GlobalContext.Provider>
    )

}