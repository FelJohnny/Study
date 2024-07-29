import { getCurso } from "@/api/cursos";
import Link from "next/link";

type PageParams={
    params:{
        curso:'string';
    }
}

export default async function cursoPage({params}:PageParams){
    const curso = await getCurso(params.curso)
    
    return(
        <main>
            <Link href={'/cursos'}>Voltar</Link>
            <h1>Aulas de {params.curso}</h1>
            {curso.aulas.map((aula)=>(
                <div key={aula.id}>
                    <h1>{aula.nome}</h1>
                    <p>sobre a aula: {aula.descricao}</p>
                    <p>Tempo aula: {aula.tempo}</p>
                    <button><Link href={`/cursos/${curso.slug}/${aula.slug}`}>Acessar Aula</Link></button>
                </div>
                
            ))}
        </main>
    )
}