import { cookies } from "next/headers";
import Link from "next/link"

type Conta={
    autorizado:boolean;
    usuario:string
}
export default async function Menu(){
    
    let conta = {
        autorizado:false,
        usuario:''
    }
    const token = cookies().get('token')?.value;
    const response = await fetch('https://api.origamid.online/conta/perfil',{
        method:'GET',
        headers:{
            Authorization:'Barear ' + token, 
        }
    });

    if(response.ok){
        conta = await response.json() as Conta
    }


    
    return(
        <nav className="menu">
            <Link href={'/'}>Home</Link>
            {conta.autorizado?<p>usuario: {conta.usuario}</p>: <Link href={'/login'}>faça login</Link>}
        </nav>
    )
}