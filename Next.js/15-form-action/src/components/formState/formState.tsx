'use client'
import cadProduto from "@/actions/cad-produto";
import { error } from "console";
import { useState } from "react";
import { useFormState } from "react-dom";

export default function FormState() {
    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState(0);
    const [descricao, setDescricao] = useState('');
    const [estoque, setEstoque] = useState(0);
    const [importado, setImportado] = useState(false); 


    
        const [state, formAction]  = useFormState(cadProduto, {
            error:[],
        });
        console.log();
        
        
    

    return (
        <form action={formAction}>            
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
