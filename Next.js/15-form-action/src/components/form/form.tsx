'use client'
import cadProduto from "@/actions/cad-produto";
import { useState } from "react";
import { useFormStatus } from "react-dom";

export default function Form() {
    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState(0);
    const [descricao, setDescricao] = useState('');
    const [estoque, setEstoque] = useState(0);
    const [importado, setImportado] = useState(false); 


    function Button(){
        const status = useFormStatus();
        return <button type="submit" disabled={status.pending}>Cadastrar</button>
    }

    return (
        <form action={cadProduto}>            
            <label htmlFor="nome">Nome</label>
            <input type="text" name='nome' value={nome} onChange={(e) => setNome(e.target.value)} />
            
            <label htmlFor="preco">Preço</label>
            <input type="number" name='preco' value={preco} onChange={(e) => setPreco(Number(e.target.value))} />
            
            <label htmlFor="descricao">Descrição</label>
            <input type="text" name='descricao' value={descricao} onChange={(e) => setDescricao(e.target.value)} />
            
            <label htmlFor="estoque">Estoque</label>
            <input type="number" name='estoque' value={estoque} onChange={(e) => setEstoque(Number(e.target.value))} />
            
            <label htmlFor="importado">Importado</label>
            <input type="checkbox" name='importado' checked={importado} onChange={(e) => setImportado(e.target.checked)} />
            
            <Button/>
        </form>
    );
}
