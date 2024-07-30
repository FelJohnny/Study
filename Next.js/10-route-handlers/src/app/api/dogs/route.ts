import { cookies } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(){

    const response = await fetch('https://api.origamid.online/conta/login',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            username:'dog',
            password:'dog',
        })
    })

    if(!response.ok){
        return Response.json({
            erro: "algum erro ocorreu",
        })
    }

    const data = await response.json();
    cookies().set('token', data.token,{
        httpOnly:true,
        secure:true,
    })

    return Response.json({ token: data.token })
}

export async function POST(request:NextRequest) {
    const param = request.nextUrl.searchParams.get('busca')
    return Response.json({teste:'teste', param})
}