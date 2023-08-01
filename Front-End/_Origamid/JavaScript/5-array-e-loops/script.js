// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002

let copaVencidas = [1959, 1962, 1970, 1994, 2002];

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

for(i = 0; i < copaVencidas.length; i++){
  console.log(`o brasil ganhou a copa no ano:${copaVencidas[i]}`);
}
// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']

console.log('usando forEach');
frutas.forEach(function(fruta){
  if(fruta === 'Pera'){
    console.log(fruta);
  }
});
console.log('usando for');
for(i =0; i<frutas.length;i++){
  console.log(frutas[i]);
  if(frutas[i] === 'Pera'){
    break;
  }
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.

console.log(ultimafruta = frutas[frutas.length -1]);