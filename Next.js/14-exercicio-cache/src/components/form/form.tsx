'use client'
import cadProduto from "@/actions/cad-produto";
import { useState } from "react";
import { Produtos } from "@/app/produtos/page"; // Certifique-se de que isso está corretamente importado

export default function Form() {
    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState(0);
    const [descricao, setDescricao] = useState('');
    const [estoque, setEstoque] = useState(0);
    const [importado, setImportado] = useState(false); 

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        
        const produto: Produtos = {
            nome,
            preco,
            descricao,
            estoque,
            importado: importado ? 1 : 0
        };
        
        const data = await cadProduto(produto);
    }

    return (
        <form onSubmit={handleSubmit}>            
            <label htmlFor="nome">Nome</label>
            <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
            
            <label htmlFor="preco">Preço</label>
            <input type="number" value={preco} onChange={(e) => setPreco(Number(e.target.value))} />
            
            <label htmlFor="descricao">Descrição</label>
            <input type="text" value={descricao} onChange={(e) => setDescricao(e.target.value)} />
            
            <label htmlFor="estoque">Estoque</label>
            <input type="number" value={estoque} onChange={(e) => setEstoque(Number(e.target.value))} />
            
            <label htmlFor="importado">Importado</label>
            <input type="checkbox" checked={importado} onChange={(e) => setImportado(e.target.checked)} />
            
            <button type="submit">Cadastrar</button>
        </form>
    );
}
