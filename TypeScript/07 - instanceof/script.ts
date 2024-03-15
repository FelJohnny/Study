document.body.style.background="#3c3c3c"

class Produto{
  nome:string;
  preco:number;
  constructor(nome: string, preco: number){
    this.nome = nome;
    this.preco = preco
  }

  precoReal(){
    return `R$ ${this.preco}`
  }
}
const livro = new Produto("marvel", 100)
console.log(livro);


console.log(livro instanceof Produto); //true   ele é instanciado da classe produto


class Livro{
  autor: string;
  constructor(autor: string){
    this.autor = autor;

  }
}

class Jogo{
  jogadores: number;
  constructor(jogadores: number){
    this.jogadores = jogadores;
    
  }
}

function buscarProduto(busca:string){
  if(busca === 'livro1'){
    return new Livro('Monica')
  }else if(busca === 'pokemon'){
    return new Jogo(100)
  }
}

const produto = buscarProduto('livro1')
//const produto = buscarProduto('pokemon')

if(produto instanceof Livro){
  console.log(produto.autor);
  
}

if(produto instanceof Jogo){
  console.log(produto.jogadores);
  
}