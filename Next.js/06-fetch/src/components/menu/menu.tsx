import Link from "next/link"
export default function Menu(){
    return(
        <nav className="menu">
            <Link href={'/'}>Home</Link>
            <Link href={'/fetch'}>Server-Fetch</Link>
            <Link href={'/fetch-client'}>Client-Fetch</Link>
        </nav>
    )
}