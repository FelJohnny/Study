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




const cursos = document.querySelectorAll('.curso');

const arrayCursos = Array.from(cursos);

const objetoCursos =arrayCursos.map((curso)=>{
  console.log(curso);
  const titulo = curso.document.querySelector('h1');
  const descricao = curso.document.querySelector('p');
  const aulas = curso.document.querySelector('.aulas');
  const horas = curso.document.querySelector('h1');
  return {

  }
})