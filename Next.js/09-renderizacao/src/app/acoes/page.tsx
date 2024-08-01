export default async function acoesPage(){
    const response = await fetch('https://api.origamid.online/acoes/lua',{
        next:{
            revalidate: 5,//com isso o servidor ira regenerar a page a cada 5 sec no cache do servidor, fzndo com que no prox refresh seja visualizado oq foi armazenado no primeiro acesso
        }
    })
    const acao = await response.json() as {simbolo:string, atualizada:string}
    
    return(
        <main>
            <h1>Ações</h1>
            <h1>{acao.atualizada}</h1>
            <h2>{acao.simbolo}</h2>
        </main>
    )
}