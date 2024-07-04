import { Metadata } from "next"


export const metadata: Metadata = {
    title: 'Sobre',
    description: 'descrição meta'
}

export default function SobrePage(){
    return(
        <div>
            <h2>sobre</h2>
        </div>
    )
}