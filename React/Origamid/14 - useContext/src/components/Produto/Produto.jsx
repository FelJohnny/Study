import React from "react";
import { useContext } from "react";
import ConteudoUsuario from "../ConteudoUsuario/ConteudoUsuario";
const Produto = ()=>{

    const dados = useContext(ConteudoUsuario)
    console.log(dados)
    return(
        <>
            <h1>Produto</h1>
            <p>{dados.nome}</p>
            {dados.TesteContext()}
            
        </>
    )
}

export default Produto