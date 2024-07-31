'use client'

import { useState } from "react"

export default function LoginComponent(){

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        const api = await fetch('http://localhost:3000/api/login',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                username: username,
                password: password,
            })
        })
        const data = await api.json()
        setMessage(data.message)
    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">username</label>
            <input type="text" name="username" id="username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
            <label htmlFor="password">password</label>
            <input type="password" name="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <button type="submit">entrar</button>
            <p>{message}</p>
        </form>
    )
}