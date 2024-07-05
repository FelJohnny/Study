'use client'

import { useState } from "react"

export default function Calculo(){
    const [altura, setAltura]=useState('')
    const [peso, setPeso]=useState('')
    const [resultado,setResultado]=useState('')
    function handleClick(){
        const alturaMetro = Number(altura) / 100;
        const total = (Number(peso) / (alturaMetro * alturaMetro)).toFixed(2)
        setResultado(total)
    }
    return(
        <>
            <label htmlFor="altura">altura</label>
            <input type="number" id="altura" value={altura} onChange={(e)=>setAltura(e.target.value)}/>

            <label htmlFor="peso">peso</label>
            <input type="number" id="peso" value={peso} onChange={(e)=>setPeso(e.target.value)}/>

            <button onClick={handleClick}>Calcular</button>

            <p>resultado: {resultado}</p>
        </>
    )
}