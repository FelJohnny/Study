import Link from "next/link"


type Cursos={
    id:number,
    nome: 'string',
    descricao: 'string',
    total_aulas: number,
    total_horas: number,
    slug: 'string',
};

export default async function produtosPage(){
    const response = await fetch('https://api.origamid.online/cursos/')
    const json = await response.json() as Cursos[]
    
    return(
        <main>
            <h1>Cursos</h1>
            {json.map((curso)=>(
                <div key={curso.id}>
                    <h1>{curso.nome}</h1>
                    <p>{curso.descricao}</p>
                    <p>total de aulas: {curso.total_aulas}</p>
                    <p>total de horas: {curso.total_horas}hrs</p>
                    <button><Link href={`/cursos/${curso.slug}`}>Acessar curso</Link></button>
                </div>
            ))}
        </main>
    )
}