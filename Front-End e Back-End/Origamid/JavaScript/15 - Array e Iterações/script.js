const carros = ['Ford', 'Fiat','Honda'];

carros.forEach((item, index, array) => {
  console.log(item.toUpperCase(), index, array);
});

console.log(carros);

console.log("O terceiro argumento do callback(array) é uma referência direta e se modificado irá também modificar a array original.")

carros.forEach((item, index, array) => {
  array[index] = "Carro " + item;
});

console.log(carros);


//com map podemos retornar novas arrays
const newcarro = carros.map((item)=>{
  return  'CarrosMap ' + item;
});

//OU const newcarro2 = carros.map((item2)=> 'CarrosMap ' + item2);

console.log(newcarro);

const aulas = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]


// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso

const cursos = document.querySelectorAll('.curso');

const arrayCursos = Array.from(cursos);

const objetoCursos = arrayCursos.map((curso)=>{
  const titulo = curso.querySelector('h1').innerText;
  const descricao = curso.querySelector('p').innerText;
  const aulas = curso.querySelector('.aulas').innerText;
  const horas = curso.querySelector('.horas').innerText;
  return {
    titulo: titulo,
    descricao,
    aulas,
    horas,
  }
})

console.log(objetoCursos);

// Retorne uma lista com os
// números maiores que 100

const numeros = [3, 44, 333, 23, 122, 322, 33];

const maiorCem = numeros.filter(numero => numero > 100)
console.log(maiorCem);

// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
]

const precoTotal = compras.reduce((contador, item)=>{
    let numeroLimpo = +item.preco.replace('R$','').replace(',','.');
    return contador += numeroLimpo;

},0);

console.log(precoTotal);
