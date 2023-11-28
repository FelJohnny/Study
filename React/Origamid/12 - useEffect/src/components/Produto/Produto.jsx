import React, { useEffect, useState } from "react";

function Produto(props){

    const [dados, setDados] = useState(null)
    const [carregando, setCarregando] = useState(false)
    


     useEffect(()=>{

         if(props.prodPreferencia !== null){
             setCarregando(true)      
             fetch(`https://ranekapi.origamid.dev/json/api/produto/${props.prodPreferencia}`)
             .then(response => response.json()) 
             .then(json => {
                 setTimeout(()=>{
                    console.log(json)
                     
                     setDados(json)
                     setCarregando(false)
                     console.log(dados)
                    },1000)
                })
            }
        },[props.prodPreferencia])
            
    
        if(dados !== null)
    return(
        
        <div>
            {carregando ? 'Carregando..' : ''}
            <h1>{dados.nome}</h1>
            <h3>{dados.preco}</h3>
        </div>
    )
}

export default Produto 