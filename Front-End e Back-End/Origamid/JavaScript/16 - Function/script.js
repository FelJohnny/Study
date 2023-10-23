function descricaoCarro(){
  console.log(this.marca + ' ' + this.ano)
}
//o this de uma função puxa a propriedade da constructor de Windows utilizando o .call isso muda

descricaoCarro.call({marca: 'Honda ', ano: 2015}); // ancora as propriedades referenciada pelo this declaradas na função


function Dom(seletor){
  this.element = document.querySelector(seletor);
}

Dom.prototype.ativo = function(classe){
  this.element.classList.add(classe)
}

const ul = new Dom('ul');

ul.ativo('ativo')
console.log(ul)

ul.ativo.call(null, 'ativo')