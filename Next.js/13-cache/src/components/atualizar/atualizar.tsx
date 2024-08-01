'use client'

import { revalidatePathAction } from "@/app/action/revalidate-path"

export default function Atualizar(){
    return <button onClick={()=>revalidatePathAction('/cache')}>Atualizar</button>
}