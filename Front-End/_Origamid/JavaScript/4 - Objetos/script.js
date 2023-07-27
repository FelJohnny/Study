var pessoa = {
  nome: 'Johnny',
  idade: 23,
  profissao: 'Developer',
  possuiFaculdade: true,
}

console.log(pessoa.nome); // Johnny


//MÉTODOS

//É uma propriedade que possui uma função no local do seu valor.

lados = 5;

var quadrado = {
  lados: 4,
  area: function(lado) {
    return lado * lado;
  },
  perimetro: function(lado){
    return this.lados * lado; //this. puxa as propriedades internas do objeto
  }
}


console.log(quadrado.perimetro(5));


//ABREVIAÇÃO de area: function() {} para area() {}, no ES6+

var quadrado2 = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro(lado) {
    return this.lados * lado;
  },
}
