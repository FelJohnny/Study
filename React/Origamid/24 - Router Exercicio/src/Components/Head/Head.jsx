import React, { useEffect } from "react";

const Head = (props)=>{
    useEffect(()=>{
        document.title = props.titulo;
        const teste = document.querySelector('meta[name="description"]').setAttribute('content', props.description)
        console.log(teste)
    },[props])
    return <></>
}

export default Head