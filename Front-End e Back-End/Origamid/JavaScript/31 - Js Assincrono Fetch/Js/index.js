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

// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar






const cepInserido = document.getElementById('cepInput')
const botao = document.getElementById('button')
const retornoCep = document.querySelector('.cepExercicio')

function buscaCEP(event){
    event.preventDefault()
    const cep = cepInserido.value
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => response.text()).then(body => {
        retornoCep.innerText = body
        
    })
}

botao.addEventListener('click', buscaCEP)


// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s


const bitcoin = document.querySelector('.bitcoin')


fetch("https://blockchain.info/ticker")
.then(response => response.json())
.then(body => bitcoin.innerText= ("R$ "+ body.BRL.buy).replace(".",","))


// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima

const btnPiada = document.querySelector(".piada")
const valuePiada = document.querySelector(".renderPiada")


function buscaPiada(){
    fetch("https://api.chucknorris.io/jokes/random")
    .then(response => response.json())
    .then(piada => valuePiada.innerText=piada.value)
}

btnPiada.addEventListener('click', buscaPiada)