import React, { createContext, useState } from 'react'


export const GlobalContext = createContext()
  
export const GlobalStorage = ({children})=>{
    const [entidade, setEntidade]=useState([])
    return(
        
        <GlobalContext.Provider value={{entidade, setEntidade}}>
            {children}
        </GlobalContext.Provider>
    )
}


