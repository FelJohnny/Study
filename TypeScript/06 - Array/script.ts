document.body.style.background="#3c3c3c"

const numeros = [10,2,111,30,40,50];
const numerosString = [10,2,"111",30,"nomes",50];

function maiorQdez(data:number[]){
  return data.filter(n => n > 10)
}

console.log(maiorQdez(numeros));
 

function filtrarValores(data:(number|string)[]){
  return data.filter(dado => typeof dado === 'number')
}

console.log(filtrarValores(numerosString));


function maiorQ10(data:Array<number>){
  return data.filter(n => n > 10)
}