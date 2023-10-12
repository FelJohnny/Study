console.log("Verifique a distância da primeira imagem em relação ao topo da página");
const imagem = document.querySelector("img");
// propriedade offsetTop , left, ri informa a distancia do elemento até o final da pagina direcionada (esquerda, direita etc)
console.log(`R: a primeira imagem possui ${imagem.offsetTop} pixels de distancia até o topo da pagina`);


console.log(" ");
console.log( "Retorne a soma da largura de todas as imagens");

const listImg = document.querySelectorAll("img");

let soma = 0;

//offsetWidth Top
listImg.forEach((imgArray)=> {
    soma += imgArray.offsetWidth;
});

console.log("R: a soma das larguras de todas imagens é: "+soma);

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
console.log(" ");

console.log("Se o browser for menor que 720px adicione a classe menu-mobile ao menu");


if(window.innerWidth <= 720){
    console.log("tela chegou em 720px de largura");

}else{
    console.log("tela está acima de 720px");
}

const size = window.matchMedia('(max-width: 750px)');

if(size.matches){
    console.log("menor que 750px pegou");
    const menu = document.querySelector(".menu");
    menu.setAttribute("class","menu-mobile");
}else{
    console.log("maior que 750px")
}