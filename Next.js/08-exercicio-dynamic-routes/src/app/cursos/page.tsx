import Link from "next/link"

export default function produtosPage(){
    return(
        <main>
            <h1>Cursos</h1>
            <Link href={'/cursos/html'}>html</Link>
        </main>
    )
}