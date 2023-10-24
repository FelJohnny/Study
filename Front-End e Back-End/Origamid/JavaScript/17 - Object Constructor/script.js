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
