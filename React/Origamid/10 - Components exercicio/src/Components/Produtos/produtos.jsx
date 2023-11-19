import React from "react";
import Nav from "../Nav/Nav";

const produtos = [
    { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
    { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
  ];

const Produtos = () =>{
    return(
    <>
        <div>
            {produtos.map(produto =>(
                <>
                    <h3>{produto.nome}</h3>
                    <ul>
                        {produto.propriedades.map(item =>(
                            <li>{item}</li>
                        ))}
                    </ul>
                </>
            ))}
                
            

        </div>
    </>
    )
}

export default Produtos