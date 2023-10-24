function descricaoCarro(){
  console.log(this.marca + ' ' + this.ano)
}
//o this de uma função puxa a propriedade da constructor de Windows utilizando o .call isso muda

descricaoCarro.call({marca: 'Honda ', ano: 2015}); // ancora as propriedades referenciada pelo this declaradas na função


//-------------------------------------------------------------------------------------------------------------------------//


const li = document.querySelectorAll('li');

const filtro = Array.prototype.filter.call(li, (item) => {
  return item.classList.contains('ativo');
});

filtro; // Retorna os itens que possuem ativo
console.log(filtro)


const arrayLike = {
  0: "item1",
  2: "item2",
  3: "item3",
  4: "item4",
  length: 4,

}

console.log("Retorne a soma total de caracteres dos parágrafos acima utilizando reduce");


const paragrafo = document.querySelectorAll('p');

const totalCaracteres = Array.prototype.reduce.call(paragrafo, (acumulador, item) =>{
  return acumulador += item.innerHTML.length
},0)

console.log("A soma dos caracteres é: " + totalCaracteres)


//----------------------------------------------------------------------------------------------------------------------------//
console.log("Criando uma Nodelist e filtrando como Array utilizando o metodo Call e retornando apenas o titulo 2")
const conteudo = document.querySelectorAll('.conteudo');

const conteudoArray = Array.prototype.filter.call(conteudo, (item) =>{
  const teste = Element.prototype.querySelector.call(item, '.titulo')
  return teste.innerText == 'Titulo 2';
})


conteudoArray.forEach((item)=>{
  console.log(item)
})
//----------------------------------------------------------------------------------------------------------------------------//


function imc(altura, peso) {
  return peso / (altura * altura);
}


// esse imc180 esta utilizando o retorno de imc sem precisar declarar o 1.80 de altura pois nesse caso o medico por exemplo so atende pessoas de 1.80 metros
const imc180 = imc.bind(null, 1.80);

imc(1.80, 70); // 21.6
imc180(70); // 21.6
