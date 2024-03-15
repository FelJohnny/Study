document.body.style.background="#3c3c3c"

class Produto{
  nome:string;
  constructor(nome: string){
    this.nome = nome;

  }
}
const livro = new Produto("marvel")
console.log(livro);


console.log(livro instanceof Produto); //true   ele é instanciado da classe produto


class Livro extends Produto{
  autor: string;
  constructor(nome: string, autor: string){
    super(nome);
    this.autor = autor;

  }
}

class Jogo extends Produto{
  jogadores: number;
  constructor(nome:string, jogadores: number){
    super(nome)
    this.jogadores = jogadores;
    
  }
}

function buscarProduto(busca:string){
  if(busca === 'livro1'){
    return new Livro('nomelivro','Monica')
  }else if(busca === 'pokemon'){
    return new Jogo('pokemon',100)
  }
}

const produto = buscarProduto('livro1')
//const produto = buscarProduto('pokemon')

if(produto instanceof Livro){
  console.log(produto.nome);
  console.log(produto.autor);
  
}

if(produto instanceof Jogo){
  console.log(produto.jogadores);
  console.log(produto.jogadores);
  
}
if(produto instanceof Produto){
  console.log(produto.nome); // so traz as propriedades de produto
  
}


interface Carro{
  nome:string
}


const honda:Carro={
  nome: 'honda'
}

console.log(honda)

//nesse caso o instance of nao funciona, pois interface faz parte de typeScript

