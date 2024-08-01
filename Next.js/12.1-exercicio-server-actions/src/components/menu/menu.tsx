'use client'

import Link from "next/link"




export default function Menu() {

    return (
        <nav className="menu">
            <Link href={'/'}>Home</Link>
            <Link href={'/login'}>faça login</Link>
        </nav>
    )
}
