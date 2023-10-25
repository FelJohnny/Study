console.log("Crie uma função que verifique corretamente o tipo de dado")

function validaTipoDeObjeto(obj){
  return Object.prototype.toString.call(obj);
}
console.log(validaTipoDeObjeto.toString())

const lista = ['item1','item2'];
console.log(validaTipoDeObjeto(lista));

//**************************************************************************************************************************/


console.log("Crie um objeto quadrado com a propriedade lados e torne ela imutável");
const quadrado = {};

Object.defineProperties(quadrado, {
  lados:{
    value: 4,
    configurable: false,
    writable: false,
    enumerable: true,
  }
});
console.log(quadrado);
console.log(Object.getOwnPropertyDescriptors(quadrado));

//**************************************************************************************************************************/


console.log("Previna qualquer mudança no objeto abaixo");
const configuracao = {};
Object.defineProperties(configuracao, {
  width: {
    value: 800,
    configurable: false,//ja vem por padrao
    writable: false, //padrao
  },
  height: {
    value: 600,
    configurable: false,
    writable: false,
  },
  background: {
    value: '#333',
    configurable: false,
    writable: false,
  },
});

Object.freeze(configuracao)//só essa linha ja resolve
console.log("R: Object.freeze(configuracao)essa linha ja resolve");
console.log(configuracao);

//**************************************************************************************************************************/
console.log("Liste o nome de todas as propriedades do protótipo de String e Array");
console.log("String: ");
console.log(Object.getOwnPropertyDescriptors(String.prototype));
console.log("Array: ");
console.log(Object.getOwnPropertyDescriptors(Array.prototype));


