import { getCursos } from "@/api/cursos";
import Link from "next/link"

export default async function cursosPage(){
    const cursos = await getCursos();
    
    return(
        <main>
            <h1>Cursos</h1>
            {cursos.map((curso)=>(
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