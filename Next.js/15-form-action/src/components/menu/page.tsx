import Link from "next/link"

export default function Menu(){
    return(
        <nav className="menu">
            <Link href={'/'}>home</Link>
            <Link href={'/produtos'}>produtos</Link>
            <Link href={'/produtos/adicionar'}>adicionar(useFormStatus)</Link>
            <Link href={'/produtos/adicionar2'}>adicionar(useFormState)</Link>
        </nav>
    )
}