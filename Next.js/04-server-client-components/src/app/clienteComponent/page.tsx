'use client'

import { useEffect, useState } from "react"

export default function clienteComponent(){

    const [largura,setLargura]= useState(0);
    const [ativo, setAtivo]=useState(false)

    useEffect(()=>{
        const handleResize = () =>{
            setLargura(document.documentElement.clientWidth)
        } 
        handleResize()
        window.addEventListener('resize', handleResize)
        return ()=>{
            window.removeEventListener('resize',handleResize)
        }
    },[])

    return(
        <>
            <h1>clienteComponent</h1>
            <h2 style={{color: ativo? "red":"blue"}}>Largura da tela: {largura}</h2>
            <button onClick={()=>setAtivo(b=>!b)}>Ativar</button>
        </>
    )
}