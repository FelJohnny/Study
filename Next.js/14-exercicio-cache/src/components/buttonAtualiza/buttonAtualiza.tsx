'use client'

import revalidatePathAction from "@/actions/revalidate-path"

export default function ButtonAtualiza(){
    return(
        <button onClick={()=>revalidatePathAction('/produtos')}>atualizar</button>
    )
}