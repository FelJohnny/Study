

var videoGames = ['Switch', 'PS4', 'XBox'];

videoGames[0] // Switch
videoGames[2] // Xbox

// MÉTODOS E PROPRIEDADES DE UMA ARRAY

console.log(" videoGames.pop() Remove o último item e retorna ele: ");
console.log(videoGames.pop()); // Remove o último item e retorna ele

console.log( + " videoGames.push('3DS') adiciona ao final da array: ")
videoGames.push('3DS')
console.log(videoGames); // Adiciona ao final da array


videoGames.length; // quantidade de itens no array 3

//FOR LOOP

for (var numero = 0; numero < 10; numero++) {
    console.log(numero);

}
// Retorna de 0 a 9 no console
  

//WHILE LOOP

var i = 0;
while (i < 10) {
console.log(i);
i++;
}
// Retorna de 0 a 9 no console



for(let i = 0; i < videoGames.length; i++){
    console.log("array "+i +" "+ videoGames[i]);
}


//ou


videoGames.forEach((item) => {
    console.log("foreach "+item);
});