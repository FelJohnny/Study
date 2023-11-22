//-----------------------------FETCH LOCAL------------------------------//

const doc = fetch('./doc.txt')

doc.then(resolucao => {
    resolucao.text()
    .then(body =>{
        const conteudo = document.querySelector('.conteudo');
        conteudo.innerText = body // manipulando o conteudo do doc.txt na pagina
        console.log(body)

    });
})

//-----------------------------FETCH VIA HTTPS------------------------------//
const cep = fetch('https://viacep.com.br/ws/08695120/json')

cep.then(retorno=>{
    console.log(retorno)
    retorno.text()
    .then(body => {
        let cepRetornado = document.querySelector('.cep')
        cepRetornado.innerText = body
        
    })
})

const cepObj = fetch('https://viacep.com.br/ws/08695120/json')

cepObj.then(retorno=>{
    retorno.json()
    .then(body => {
        let cepObj = document.querySelector('.cepObj')
        cepObj.innerText = body.localidade        
    })
})

//-----------------------------FETCH VIA HTTPS------------------------------//


const estiloCss = fetch('./css/style.css')
    .then(retorno => retorno.text())
    .then(body => {
        const style = document.createElement('style')
        const corpo = document.querySelector('body')
        style.innerHTML = body
        corpo.appendChild(style)//adicionando

        console.log(body)
        
    })
    
    
//------------------------HTML-------------------------//

const div = document.createElement('div')

const sobre = fetch('./index.html')
    .then(resposta => resposta.text())
    .then(text => {
        div.innerHTML =text //adicoinando todo html dentro da div
        const titulo = div.querySelector('h1') //pegando o h1 de dentroo da div criada
        const corpo = document.querySelector('body')
        corpo.appendChild(titulo) //adicionando o h1 e adicionando ao final do html
        console.log(div)
        console.log(titulo)
    })

