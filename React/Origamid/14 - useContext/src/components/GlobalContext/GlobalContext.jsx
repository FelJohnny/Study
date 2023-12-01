import React, { useState, createContext } from "react";


export const GlobalContext = createContext()

export const GlobalStorage = ({children})=>{

    const [carrinho, setCarrinho] = useState(0);

    return(
        <GlobalContext.Provider value={{carrinho, setCarrinho}}>
            {children}
        </GlobalContext.Provider>
    )

}