import { cookies } from "next/headers";
import { NextRequest } from "next/server";

export async function POST(request:NextRequest) {

    const body = await request.json();
    
    try {

        if(!body.username){
            return Response.json({
                message:"insira o username",
                erro: true
            });
        }
        if(!body.password){
            return Response.json({
                message:"insira o password",
                erro: true
            });
        }

        const response = await fetch('https://api.origamid.online/conta/login',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                username:body.username,
                password:body.password,
            })
        });
        const data = await response.json();

        cookies().set('token', data.token, {
            secure: true,
            httpOnly: true,
          });

        return Response.json({
            token: data.token,
            message:'login realizado',
            erro: false
        });

    } catch (error) {        
        return Response.json({
            message:"erro ao fazer login",
            erro: true
        });
    } 
}