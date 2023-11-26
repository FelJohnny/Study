fetch('./dados.json')
.then(json => json.json())
.then(dado => {
    dado.forEach(pessoa => console.log(pessoa.nome))
    
})


//alternativa transformando TEXT em JSON
fetch('./dados.json')
.then(json => json.text())
.then(dado => {
    const textoTransformado = JSON.parse(dado)
    console.log(textoTransformado) 
})


//objeto em json
const confguracoes = {
    player: 'kiliko',
    DPI: 1700,
    sensibilidade: 0.24
}

//vira string no formato de leitura JSON
const StringConfig = JSON.stringify(confguracoes)

console.log(StringConfig)
