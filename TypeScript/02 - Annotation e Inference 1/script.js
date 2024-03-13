"use strict";
let produto = "Livro";
let preco = 100;
const carro = {
    marca: "audi",
    portas: 4
};
// inferencia, o typeScript ja entente por si só os tipos de cada variavel  a declaracao do tipo geralemte e usada quando é declarada funcoes e afins
const barato = 200 < 400 ? true : "produto caro";
const barato1 = 200 < 400 ? true : "produto caro";
function somar(a, b) {
    return a + b;
}
console.log(somar(4, 10));
const nintendo = {
    nome: "Nintendo",
    preco: "2000"
};
function transformarPreco(produto) {
    produto.preco = 'R$ ' + produto.preco;
    return produto;
}
const produtoNovo = transformarPreco(nintendo);
console.log(produtoNovo);
