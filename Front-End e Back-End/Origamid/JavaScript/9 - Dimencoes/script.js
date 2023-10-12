console.log("Verifique a distância da primeira imagem em relação ao topo da página");
const imagem = document.querySelector("img");
// propriedade offsetTop , left, ri informa a distancia do elemento até o final da pagina direcionada (esquerda, direita etc)
console.log(`R: a primeira imagem possui ${imagem.offsetTop} pixels de distancia até o topo da pagina`);



console.log( "Retorne a soma da largura de todas as imagens");

const listImg = document.querySelectorAll("img");

let soma = 0;

//offsetWidth Top
listImg.forEach((imgArray)=> {
    soma += imgArray.offsetWidth;
});

console.log("R: a soma das larguras de todas imagens é: "+soma);

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
