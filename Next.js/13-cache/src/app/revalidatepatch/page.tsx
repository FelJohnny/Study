import Atualizar from "@/components/atualizar/atualizar"

export default async function RevalidatepatchPage() {
    return(
        <main>
            <h1>Revalidatepatch</h1>
            <p>É uma função que recebe path de uma rota e revalida o cache da mesma</p>
            <p>Pode ser executada no servidor, em Route Handlers e Server Actions.</p>

            <h3>clique para atualizar a rota /cache:</h3>
            <Atualizar/>

        </main>
    ) 
}