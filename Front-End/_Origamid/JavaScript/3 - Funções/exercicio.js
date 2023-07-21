// Crie uma função para verificar se um valor é Truthy


// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function PerimetroQuadrado(){
  let medida_Lado = 5;
  let perimetro = medida_Lado * 4;
  return `o perimetro do quadrado com a medida de ${medida_Lado} em cada lado é ${perimetro}`;
}

console.log(PerimetroQuadrado())
// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function NomoCompleto(){
  var nome = 'Felipe', sobrenome = 'Johnny';
  return `O seu nome compléto é ${nome} ${sobrenome}`;
}

console.log(NomoCompleto())

// Crie uma função que verifica se um número é par

function ParOuImpar(n1){
  calculo = n1 % 2;
  if (calculo == 1){
    return `o numero ${n1} é impar`;
  }else{
    return ` o numero ${n1} é par`;
  }
}

console.log(ParOuImpar(55))

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

// Corrija o erro abaixo
/*function precisoVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20);

*/
