let produto: string = "Livro";

let preco: number = 100;

const carro: {
   marca: string;
   portas: number;

} ={
   marca:"audi",
   portas: 4
}

// inferencia, o typeScript ja entente por si só os tipos de cada variavel  a declaracao do tipo geralemte e usada quando é declarada funcoes e afins

const barato = 200 < 400 ? true : "produto caro";
const barato1: boolean | string = 200 < 400 ? true : "produto caro";


function somar(a:number,b: number){
   return a + b;
}

console.log(somar(4,10));
 

const nintendo ={
   nome: "Nintendo",
   preco: "2000"
}

function transformarPreco(produto: {nome:string; preco:string}){
   produto.preco = 'R$ ' + produto.preco;
   return produto // 'R$ 10'
}

const produtoNovo = transformarPreco(nintendo)

console.log(produtoNovo);
