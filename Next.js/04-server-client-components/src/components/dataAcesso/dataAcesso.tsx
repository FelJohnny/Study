import fs from 'fs/promises'

export default async function DataAcesso() {
    await fs.appendFile('acesso.txt',`${Date.now()} `,'utf8')
    const data = fs.readFile('acesso.txt','utf8')

    return(
        <div>{data}</div>
    )
}