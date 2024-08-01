'use client'

import { realizaLogin } from "@/actions/login";
import { pegaCookie } from "@/actions/pegaCookie";
import { useState } from "react";

export default function LoginComponent() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [cookie, setCookie] = useState('');

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const response = await realizaLogin(username, password);
        setMessage(response.message);
    }

    async function atualiza(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        const cookie = await pegaCookie();
        if (cookie && cookie.value) {
            setCookie(cookie.value);
        } else {
            setCookie('sem cookie');
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">username</label>
                <input 
                    type="text" 
                    name="username" 
                    id="username" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                />
                <label htmlFor="password">password</label>
                <input 
                    type="password" 
                    name="password" 
                    id="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />
                <button type="submit">entrar</button>
                <p>{message}</p>
            </form>
            <button onClick={atualiza}>Pegar Cookie</button>
            <p>cookie: {cookie}</p>
        </>
    )
}
