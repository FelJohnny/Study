console.log(Object.getOwnPropertyDescriptors(Array));
console.log(Object.getOwnPropertyDescriptors(Array.prototype));

const moto = {}

Object.defineProperties(moto, {
  rodas: {
    get(){
      return this._rodas;
    },
    set(valor){
      this._rodas = valor * 2;
    },
    enumerable: true,

  },
  capacete: {
    value: true,
    configurable: false,
    writable: false,
    enumerable: true,
  }
});

console.log(Object.getOwnPropertyDescriptors(moto));
console.log('getOwnPropertyDescriptors pega uma propriedade ou metodo especifico do objeto moto')
console.log(Object.getOwnPropertyDescriptor(moto, 'rodas'));

console.log(Object.keys(moto)) // precisar ser enumerado

console.log(Object.values(moto))

console.log(Object.entries(moto))

//lista os metodos e propriedades mesmo sendo não enumerados
console.log("getOwnPropertyNames de Array")
console.log(Object.getOwnPropertyNames(Array));
console.log("getOwnPropertyNames de Array.proto")
console.log(Object.getOwnPropertyNames(Array.prototype));

console.log("getPrototypeOf Pega o prototype do construtor do objeto informado no caso de moto é object")
console.log(Object.getPrototypeOf(moto));


console.log("Object.is verifica se  o objeto é o mesmo e não se contem o mesmo conteudo")
const frutas1 = ['Banana', 'Pêra'];
const frutas2 = ['Banana', 'Pêra'];
console.log(Object.is(frutas1, frutas2));

//Object.freeze()impedir qualquer mudança nas propriedades. Object.seal()evite a adição de novas propriedades e impeça que as atuais sejam excluídas. Object.preventExtensions()prevenir a adição de novas propriedades.