const nav = document.querySelector('nav');
/*const cria variavel e a mesma nao pode ser declarada novamente*/
/* document.querySelector()  puxa classes ou tags do html por exemplo*/
const produtos = document.querySelector('.produtos a');
console.log(nav);
console.log(produtos);

//mostra conteudo 
console.log(produtos.innerHTML)
/*produtos.remove();*/

console.dir(nav);

//aplicando style via javascript
nav.style.background ="teal"
nav.style.padding = "1rem"