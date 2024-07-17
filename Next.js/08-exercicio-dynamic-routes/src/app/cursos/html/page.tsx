import Link from "next/link";

export default function produtosPage(){
    return(
        <main>
            <h1>Cursos</h1>
            <p>html</p>
            <Link href={'/cursos/html/introducao-ao-html'}>Curso de html</Link >
            
        </main>
    )
}