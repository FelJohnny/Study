if(true){
    console.log("Teste")
}
else{
    console.log("nao aparece kkj")
}

//operadores logicos

//  &&  e
// ||   ou
// ===
// >=
// <=
const elemento = document.querySelector('p');
if(elemento || document.querySelector('body')){
    console.log('o body existe :)')
}


if(elemento && document.querySelector('body')){
    console.log('nao roda pois os dois tem q retornar verdadeiro')
}