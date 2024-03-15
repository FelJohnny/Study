"use strict";
document.body.style.background = "#3c3c3c";
class Produto {
    nome;
    preco;
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
    precoReal() {
        return `R$ ${this.preco}`;
    }
}
const livro = new Produto("marvel", 100);
console.log(livro);
console.log(livro instanceof Produto); //true   ele é instanciado da classe produto
class Livro {
    autor;
    constructor(autor) {
        this.autor = autor;
    }
}
class Jogo {
    jogadores;
    constructor(jogadores) {
        this.jogadores = jogadores;
    }
}
function buscarProduto(busca) {
    if (busca === 'livro1') {
        return new Livro('Monica');
    }
    else if (busca === 'pokemon') {
        return new Jogo(100);
    }
}
const produto = buscarProduto('livro1');
//const produto = buscarProduto('pokemon')
if (produto instanceof Livro) {
    console.log(produto.autor);
}
if (produto instanceof Jogo) {
    console.log(produto.jogadores);
}
