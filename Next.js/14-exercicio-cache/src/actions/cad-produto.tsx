'use server'

import { Produtos } from "@/app/produtos/page";
import revalidatePathAction from "./revalidate-path";
import { redirect } from "next/navigation";

export default async function cadProduto(produto: Produtos) {
    const response = await fetch('https://api.origamid.online/produtos',{
        method:'POST',
        headers:{
            'Content-Type': 'Application/json',
        },
        body:JSON.stringify(produto)
    });
    const data = await response.json();
    console.log(data);
    
    revalidatePathAction('/produtos');
    redirect('/produtos')
}