import { getAula } from "@/api/cursos";
import Link from "next/link";

type PageParams={
    params:{
        curso:'string';
        aula:'string';
    }
}

export default async function cursoPage({params}:PageParams) {
   
    const aula = await getAula(params.curso, params.aula)
    return(
        <div>
            <Link href={`/cursos/${params.curso}`}>Voltar</Link>
            <h1>{aula.nome}</h1>
            <h2>{aula.descricao}</h2>
            <p>tempo aula:{aula.tempo}</p>

        </div>
    )

}