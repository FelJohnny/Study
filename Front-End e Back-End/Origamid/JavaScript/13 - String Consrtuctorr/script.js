const transacoes = [
  {
    descricao: 'Taxa do Pão',
    valor: 'R$ 39',
  },
  {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 99',
  },
  {
    descricao: 'Taxa do Banco',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 49',
  },
];

function visualiza(){
  transacoes.forEach(element => {
    console.log(element.valor.slice(3));
  });
  
}
//visualiza();

/*--------------------------------------------------------------------------------------------------------------------*/

console.log('Utilizando o foreach na array abaixo, some os valores de Taxa e os valores de Recebimento:');
let somaTaxa = 0;
let somaRecebimento = 0;

function somaValor(){
  transacoes.forEach(element => {
    if(element.descricao.slice(0, 4) === 'Taxa'){

      let valorLimpo = parseInt(element.valor.slice(3)); //parseint
      somaTaxa += valorLimpo;
    }else if(element.descricao.slice(0, 4) === 'Rece'){
      let valorLimpo = parseInt(element.valor.slice(3)); //parseint
      somaRecebimento += valorLimpo;
    }
  });
  console.log('A soma dos valores das Taxas são: '+ somaTaxa)
  console.log('A soma dos valores das Recebimento são: '+ somaRecebimento)
}
somaValor();

/*--------------------------------------------------------------------------------------------------------------------*/
console.log("");
console.log("Retorne uma array com a lista abaixo: ");

const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
console.log(transportes)
const listaTransporte = transportes.split(';');

listaTransporte.forEach((item)=>{
  console.log(item)
})

