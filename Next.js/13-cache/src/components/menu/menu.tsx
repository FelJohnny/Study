import Link from "next/link";


export default function Menu(){
    return(
        <nav className="menu">
            <Link href={'/'}>home</Link>
            <Link href={'/cache'}> cache</Link>
            <Link href={'/revalidatepatch'}> revalidatePath</Link>
        </nav>
    )
}