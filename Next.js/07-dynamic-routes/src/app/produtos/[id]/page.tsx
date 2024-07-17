type PageParams ={
    params:{
        id:string
    }
}

type Produto ={
    nome: string,
    preco: number,
    descricao: string,
    estoque: number,
    importado: number,
}

export default async function produtosPage({params}: PageParams){
    const response = await fetch(`https://api.origamid.online/produtos/${params.id}`)
    const json = await response.json() as Produto;
    
    
    return(
        <main>
            <h1>Produto</h1>
            <h2>parametro da url: {params.id}</h2>
            <p>Nome: {json.nome}</p>
            <p>preço: {json.preco}</p>
            <p>descricao: {json.descricao}</p>
            <p>estoque: {json.estoque}</p>
        </main>
    )
}