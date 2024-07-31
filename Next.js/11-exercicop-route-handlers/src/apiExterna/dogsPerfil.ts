import { cookies } from "next/headers";

export async function acessaPerfil() {
    const token = cookies().get('token')?.value;
    const response = await fetch('https://api.origamid.online/conta/perfil',{
        method:'GET',
        headers:{
            Authorization:'Barear ' + token, 
        }
    });
    return (await response.json());
}