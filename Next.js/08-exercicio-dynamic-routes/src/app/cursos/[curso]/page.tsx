import Link from "next/link";

type PageParams={
    params:{
        curso:'string'
    }
}

type Aula={
    nome: 'string',
    descricao: 'string',
    tempo: number,
    slug: 'string',
};

type Curso = {
    aulas: Aula[],
    descricao: string,
    slug:'string',
};

export default async function produtosPage({params}:PageParams){
    
    const response = await fetch(`https://api.origamid.online/cursos/${params.curso}`)
    const json = await response.json() as Curso
    
    return(
        <main>
            <h1>Aulas de {params.curso}</h1>
            {json.aulas.map((aula)=>(
                <>
                    <h1>{aula.nome}</h1>
                    <p>sobre a aula: {aula.descricao}</p>
                    <p>Tempo aula: {aula.tempo}</p>
                    <button><Link href={`/cursos/${json.slug}/${aula.slug}`}>Acessar Aula</Link></button>

                </>
                
            ))}
        </main>
    )
}