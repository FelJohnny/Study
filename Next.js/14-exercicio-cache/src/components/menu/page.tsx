import Link from "next/link"

export default function Menu(){
    return(
        <nav className="menu">
            <Link href={'/'}>home</Link>
            <Link href={'/produtos'}>produtos</Link>
            <Link href={'/produtos/adicionar'}>adicionar</Link>
        </nav>
    )
}