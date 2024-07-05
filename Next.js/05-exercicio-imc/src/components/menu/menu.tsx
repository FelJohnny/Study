import Link from "next/link"
export default function Menu(){
    return(
        <nav>
            <Link href={'/'}>Home</Link>
            <Link href={'/imc'}>IMC</Link>
        </nav>
    )
}