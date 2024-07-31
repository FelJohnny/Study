import Link from "next/link"
import {acessaPerfil} from '@/apiExterna/dogsPerfil'

export default function Menu(){

    const data = acessaPerfil()
    console.log(data);
    
    return(
        <nav className="menu">
            <Link href={'/'}>Home</Link>
        </nav>
    )
}