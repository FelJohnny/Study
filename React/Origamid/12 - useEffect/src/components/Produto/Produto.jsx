import React from "react";

function Produto(props){
    return(
        <div>
            <h1>{props.dados.nome}</h1>
            <h3>{props.dados.preco}</h3>
        </div>
    )
}

export default Produto 