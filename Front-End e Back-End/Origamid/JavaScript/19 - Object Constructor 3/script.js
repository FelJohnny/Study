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

console.log(".constructor mostra o tipo do contrudor do moto é um objeto")
console.log(moto.constructor)
console.log("hasOwnProperty, valida se a propriedade ou metodo existe no objeto")
console.log(moto.hasOwnProperty('rodas'))
console.log(moto.hasOwnProperty('map'))
console.log("isPrototypeOf Valida se o construtor informado no inicio do argumento é prototype de moto, no caso nao é pois seria Object")
console.log(Array.prototype.isPrototypeOf(moto));
console.log(Object.prototype.isPrototypeOf(moto));

const li = document.querySelectorAll('li');
console.log("meios de validar tipo do Objeto ")
console.log("Com typeOf: ");
console.log(typeof li); // object
console.log("Com toString: ");
console.log(li.toString());