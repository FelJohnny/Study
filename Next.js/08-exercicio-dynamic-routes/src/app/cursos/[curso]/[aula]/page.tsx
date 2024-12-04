import Link from "next/link";

type PageParams={
    params:{
        curso:'string'
        aula:'string'
    }
}
type Curso={
    id:number,
    nome: 'string',
    descricao: 'string',
    slug: 'string',
    tempo: number,
};

export default async function AulaPages({params}:PageParams) {
    
    const response = await fetch(`https://api.origamid.online/cursos/${params.curso}/${params.aula}`)
    const json = await response.json() as Curso
   
    return(
        <div>
            <Link href={`/cursos/${params.curso}`}>Voltar</Link>
            <h1>{json.nome}</h1>
            <h2>{json.descricao}</h2>
            <p>tempo aula{json.tempo}</p>

        </div>
    )

}