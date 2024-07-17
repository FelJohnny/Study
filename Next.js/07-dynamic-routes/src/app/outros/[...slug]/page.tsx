type PageParams ={
    params:{
        slug:string[]
    }
}


// slug mostra os parametros inseridos apartir do diretorio inicial do slug
export default async function produtosPage({params}: PageParams){
    console.log(params);
    
    return(
        <main>
            <h1>outros</h1>
        </main>
    )
}