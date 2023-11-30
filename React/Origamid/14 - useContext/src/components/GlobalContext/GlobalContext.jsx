import React from "react";
import { createContext } from "react";

export const GlobalContext = createContext()

export const GlobalStorage = ({children})=>{

    return <GlobalContext.Provider>{children}</GlobalContext.Provider>

}