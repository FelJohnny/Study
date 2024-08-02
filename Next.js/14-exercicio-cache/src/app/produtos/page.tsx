export type Produtos={
    id?:number;
    nome:string;
    preco:number;
    descricao:string;
    estoque:number;
    importado:number
}

import ButtonAtualiza from "@/components/buttonAtualiza/buttonAtualiza";
export default async function PageProdutos() {

    const response = await fetch('https://api.origamid.online/produtos')
    const produtos = await response.json() as Produtos[]

    return(
        <main>
            <h1>produtos</h1>
            <ButtonAtualiza/>
            {produtos.map((produto)=>(
                <ul key={produto.id}>
                    <li>{produto.nome}</li>
                    <li>{produto.preco}</li>
                    <li>{produto.descricao}</li>
                    <li>{produto.estoque}</li>
                    <li>{produto.importado ? 'true':'false'}</li>
                </ul>
                
            ))}
        </main>
    )
    
}