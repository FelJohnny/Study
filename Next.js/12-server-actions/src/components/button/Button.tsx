'use client'

import { setCookie } from "@/actions/set-cookies"
import { useEffect, useState } from "react"

interface CookieResponse {
    value: string;
}

export default function Button() {
    const [data, setData] = useState<CookieResponse | null>(null);

    async function handleClick() {
        const response: CookieResponse = await setCookie('chave', 'valor do cookieasdasd');
        setData(response);
    }

    useEffect(() => {
        async function atualiza() {
            const response: CookieResponse = await setCookie('width', document.documentElement.clientWidth.toString());
            setData(response);
        }
        atualiza();
    }, []);

    return (
        <>
            <button onClick={handleClick}>gerar cookie</button>
            {data && <p>cookie: {data.value}</p>}
        </>
    )
}
