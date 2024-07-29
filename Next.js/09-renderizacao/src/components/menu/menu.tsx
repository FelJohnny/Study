import Link from "next/link"

export default function Menu(){

    return(
        <nav className="menu">
            <Link href={'/'}>Home</Link>
            <Link href={'/cursos'}>Cursos</Link>
            <Link href={'/acoes'}>Ações</Link>
        </nav>
    )
}