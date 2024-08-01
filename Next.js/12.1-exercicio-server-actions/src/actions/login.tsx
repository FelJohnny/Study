'use server'

import { cookies } from "next/headers";

export async function realizaLogin(username:string,password:string) {
    
    try {
        if(!username){
            return{
                message:"insira o username",
                erro: true
            }
        }
        if(!password){
            return{
                message:"insira o password",
                erro: true
            }
        }

        const response = await fetch('https://api.origamid.online/conta/login',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({username,password})
        });
        const data = await response.json();

        cookies().set('token', data.token, {
            secure: true,
            httpOnly: true,
        });

        return{
            token: data.token,
            message:'login realizado',
            erro: false
        }

    } catch (e) {
        return {           
            message:"erro ao fazer login",
            erro: true,
        }        
    }

}