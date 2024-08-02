'use server'

import { Produtos } from "@/app/produtos/page";
import revalidatePathAction from "./revalidate-path";
import { redirect } from "next/navigation";

export default async function cadProduto(state:{error:[]}, formData: FormData) {
    try {
        
        const produto: Produtos = {
            nome: formData.get('nome') as string,
            preco: Number(formData.get('preco')),
            descricao: formData.get('descricao') as string,
            estoque: Number(formData.get('estoque')),
            importado: formData.get('importado') ? 1 : 0,
        }
        const response = await fetch('https://api.origamid.online/produtos',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(produto)
        });
        if(!response.ok) throw new Error('erro ao adicionar produto')
        // revalidatePathAction('/produtos');
        // redirect('/produtos')
    } catch (error: unknown) {
        if(error instanceof Error)
        return{
            error:[error.message]
        }
    }
    return {error:[]}
}