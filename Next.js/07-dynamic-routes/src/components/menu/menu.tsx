import Link from "next/link"

export default function Menu(){
    return(
        <nav className="menu">
            <Link href={'/'}>Home</Link>
            <Link href={'/produtos'}>Produtos</Link>
        </nav>
    )
}