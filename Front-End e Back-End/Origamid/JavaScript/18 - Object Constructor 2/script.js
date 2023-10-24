//MÉTODOS DE OBJECT

const carro ={
  rodas: 4,
  init(marca){
    this.marca = marca;
    return this
  },
  acelerar(){
    return `${this.marca} acelerou as ${this.rodas} rodas`
  },
  buzinar(){
    return this.marca + ' buzinou';
  }

}
console.log("Objeto carro:")
console.log(carro);

// criando um objeto dessa forma as propriedades e metodos do objeto instanciado fica como prototipagem do construtor/Objeto
const honda = Object.create(carro);

honda.init('Honda').acelerar();
console.log("Obrjeto criado por instancia utilizando Object.create(objetoInstacia), as propriedades e metodos dele ficaram disponiveis no prototype do construtor");
console.log(honda);

//---------------------------------------------------------------------------------------------------------------------------------------------//

// Object.assign(alvo, obj1, obj2) adiciona ao alvo as propriedades e métodos enumeráveis dos demais objetos. O assign irá modificar o objeto alvo
console.log("instanciando com Object Assign")
const funcaoAutomovel = {
  acelerar(){
    return `${this.tipo} acelerou`;
  },
  buzinar(){
    return 'buzinou';
  }
}


const caminhao = {
  tipo: 'caminhao',
  rodas: 6,
  portas: true,
}
console.log(caminhao)


const moto = {
  tipo: 'moto',
  rodas:2,
  capacete:true,
}
console.log(moto)

console.log("apos o assing:(instanciação) os metodos e propriedades fazem parte do objeto caminhão");
Object.assign(caminhao, funcaoAutomovel)
console.log(caminhao);

Object.assign(moto, funcaoAutomovel)
console.log("apos o assing:(instanciação) os metodos e propriedades fazem parte do objeto moto");
console.log(moto);



//Object.defineProperties(alvo, propriedades)adicione ao alvo novas propriedades. A diferença aqui é a possibilidade de definir as características dessas propriedades. as propriedades ficam imutaveis

const moto1 = {}

Object.defineProperties(moto1, {
  rodas: {
    value:2, //valor de rodas
    configurable: false, // a propriedade nao pode ser alterada ou sobrescrevida(ja vem por padrao como false)
    writable: false, //diz que o valor pode ser sobrescrevido(por padrao vem false)
  },
  capacete: {
    value: true,
    configurable: false,
    writable: false,
  }
});



const moto2 = {}

Object.defineProperties(moto2, {
  rodas: {
    //toda declaração feita em moto1.rodas ira usar essa funçã get enviar a informação do value
    get(){
      return this._rodas;
    },
    //toda atribuição feita em moto1.rodas ira usar essa funçã get armazerar e atribuir à value
    set(valor){
      this._rodas = valor * 2;
    },
  },
  capacete: {
    value: true,
    configurable: false,
    writable: false,
  }
});


