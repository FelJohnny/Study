'use client'
import Link from "next/link"
import { useEffect, useState } from "react";


export default function Menu(){
    
    const [perfil, setPerfil] = useState('');

    useEffect(()=>{
        async function validaLogin() {
            const response = await fetch('http://localhost:3000/api/perfil')
            const {data} = await response.json();
            if(response.ok){
                setPerfil(data.usuario)
            }
        }
        validaLogin()
    },[])
    
    return(
        <nav className="menu">
            <Link href={'/'}>Home</Link>
            {perfil?<p>usuario: {perfil}</p>: <Link href={'/'}>faça login</Link>}
        </nav>
    )
}
//usaria global context para deixar a atualização instantanea, finalizei mas ainda não corrigi com a prox aula