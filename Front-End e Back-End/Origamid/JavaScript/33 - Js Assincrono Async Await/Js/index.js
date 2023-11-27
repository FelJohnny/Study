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
  