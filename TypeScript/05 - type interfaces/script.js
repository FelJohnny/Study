"use strict";
document.body.style.background = "#3c3c3c";
function preencherDados(dados) {
    document.body.innerHTML += `
      <h2>${dados.nome}</h2>
      <p>${dados.preco}</p>
      <p>inclui teclado: ${dados.teclado ? 'sim' : 'não'}
   `;
}
preencherDados({
    nome: "computador",
    preco: 1000,
    teclado: true
});
preencherDados({
    nome: "note",
    preco: 2000,
    teclado: false
});
let total;
//total = true;
total = "1000";
const computador = {
    nome: "produto com type",
    preco: 2000,
    teclado: false
};
preencherDadosType(computador);
function preencherDadosType(dados) {
    document.body.innerHTML += `
   <h2>${dados.nome}</h2>
   <p>${dados.preco}</p>
   <p>inclui teclado: ${dados.teclado ? 'sim' : 'não'}
   `;
}
preencherDadosType({
    nome: "computador",
    preco: 1000,
    teclado: true
});
function pintarCategoria(categoria) {
    console.log(categoria);
}
//pintarCategoria("codddigo")
pintarCategoria("codigo");
