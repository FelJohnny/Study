'use client'
import cadProduto from "@/actions/cad-produto"
import { useState } from "react"

export default function Form(){

    const [id, setID] = useState('')
    const [nome,setNome] = useState('')
    const [preco, setPreco] = useState(0)
    const [descricao, setDescricao] = useState('')
    const [estoque, setEstoque] = useState(0)
    const [importado, setImportado] = useState(0)

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        
        const produto = {
            id,nome,preco,descricao,estoque,importado
        }
        const data = await cadProduto(produto)
        console.log(data);
        
    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="id">id</label>
            <input type="text" value={id} onChange={(e) => setID(e.target.value)}/>
            <label htmlFor="nome">nome</label>
            <input type="text" value={nome} onChange={(e) => setNome(e.target.value)}/>
            <label htmlFor="preco">preco</label>
            <input type="text" value={preco} onChange={(e) => setPreco(Number(e.target.value))}/>
            <label htmlFor="descricao">descricao</label>
            <input type="text" value={descricao} onChange={(e) => setDescricao(e.target.value)}/>
            <label htmlFor="id">estoque</label>
            <input type="text" value={estoque} onChange={(e) => setEstoque(Number(e.target.value))}/>
            <label htmlFor="importa">importa</label>
            <input type="checkbox" checked={importado} onChange={(e) => setImportado(e.target.checked? 1:0)}/>

            <button>Cadastrar</button>
        </form>
    )
}



// id:number;
// nome:string;
// preco:4500;
// descricao:string;
// estoque:10;
// importa:1