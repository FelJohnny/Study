async function puxarDados(){
    try{

        const responseDados = await fetch('./Js/dados.json')//apenas apos a letura ou leitura ele vai mostrar a resposta
        const jsonDados = await responseDados.json()

        console.log(jsonDados)
        const paragrafo = document.querySelector('p')
        paragrafo.innerText = jsonDados.aula
    }catch{
        console.log(Error('algum erro ocorreu'))
    }
    
}

puxarDados()

async function puxarDados2(){
    try{

        const responseDados =  fetch('./Js/dados.json')//apenas apos a letura ou leitura ele vai mostrar a resposta
        const responseClientes = fetch('./Js/clientes.json')

        const jsonDados = await (await responseDados).json() //usar o await em parenteses é o mesmo que usar na res "const responseClientes = await fetch('./Js/clientes.json')"
        const jsonClientes = await (await responseClientes).json()
        
        
        const paragrafo = document.querySelector('div')
        paragrafo.innerText = jsonDados.aula
    }catch{
        console.log(Error('algum erro ocorreu'))
    }
    
}

puxarDados2()


  
async function iniciarAsync() {
await new Promise(resolve => {
    setTimeout(() => resolve(), 1000)
});
console.log('Depois de 1s');
}
iniciarAsync();
  

//-------------CEP----------------/

const cepInserido = document.getElementById('cepInput')
const botao = document.getElementById('button')
const retornoCep = document.querySelector('.cepBody')

async function buscaCEP(event){
    try{

        event.preventDefault()
        const cep = cepInserido.value
        const responseCep = fetch(`https://viacep.com.br/ws/${cep}/json/`)
        console.log(responseCep)
        const cepJson = await (await responseCep).text()
        console.log(responseCep)

        console.log(cepJson)
        retornoCep.innerText = cepJson
            
        
    }catch{
        console.log(Error("deu erro"))
    }
}

botao.addEventListener('click', buscaCEP)