export async function GET(){

    const response = await fetch('https://api.origamid.online/vendas',{
        headers:{
            apikey: 'ORIGAMID123456'
        }
    })
    const vendas = await response.json()
    return Response.json({
        method: 'GET',
        ok:true,
        pagina: 'vendas',
        vendas: vendas,
    })
}