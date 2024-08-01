type Acao={
    nome:string;
    preco:number;
    atualizada:string;
}

export default async function cachePage() {

    const response = await fetch('https://api.origamid.online/acoes/lua',{
        cache: 'no-store'
    });

    const acao = await response.json() as Acao



    const responseRevalidate = await fetch('https://api.origamid.online/acoes/lua',{
        next:{
            revalidate: 60
        }
    });
 
    const revalidate = await responseRevalidate.json() as Acao
    return(
        <>
            <main>
                <h1>No-store</h1>
                <h2>{acao.nome}</h2>
                <p>preço: {acao.preco}</p>
                <p>ultima atualização: {acao.atualizada}</p>
                <p>com o no-store o cache não é aplicado</p>
            </main>

            <main>
                <h1>Revalidate</h1>
                <h2>{revalidate.nome}</h2>
                <p>preço: {revalidate.preco}</p>
                <p>ultima atualização: {revalidate.atualizada}  (atualizando a cada 60sec)</p>
                <p>com o no-store o cache não é aplicado</p>
            </main>
        </>
    )
}