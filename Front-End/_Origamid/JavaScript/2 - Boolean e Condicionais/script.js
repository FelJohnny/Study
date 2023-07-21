var PossuiGraduacao = true;
var PossuiDoutorado = false;

console.log(PossuiDoutorado, PossuiGraduacao);

//---------------IF------------------------------

if (PossuiGraduacao) {
    console.log("possui graduação");
} else {
    console.log("não possui graduação");
}

//---------------ELSE IF------------------------------


if (PossuiDoutorado) {
    console.log("possui doutorado e graduação");
} else if (PossuiGraduacao) {
    console.log("não possui doutorado mas possui graduação");
} else ("não tem formação")


// doutorado true

PossuiDoutorado = true;

if (PossuiDoutorado) {
    console.log("possui doutorado e graduação");
} else if (PossuiGraduacao) {
    console.log("não possui doutorado mas possui graduação");
} else ("não tem formação")

//condicional else if apenas incrementa mais uma checagem se o primeiro funcionar não necessariamente significa que o segundo if é verdadeiro


//---------------SWITCH-CASE-----------------------------

var corFavorita = 'Azul';


switch (corFavorita){
    case 'Azul':
        console.log('Olhe para o céu, sua cor fav é azul');
        break;
    case 'Vermelho':
        console.log('olhe para rosas');
        break;
    case 'Amarelo':
        console.log('olhe para o Sol :P');
        break;
    default:
        console.log('Feche os olhos, você não possui cor favorita');        
}


//-----------------------------TRUTHY E FALSY------------------

// 0 , NaN, null, false, undefined sempre retorna falso
if(0){
     console.log("verdadeiro")
}else{
    console.log('falso')
}


//operadores de comparação

10 > 5; // true
5 > 10; // false
20 < 10; // false
10 <= 10 // true
10 >= 11 // false


//O == faz uma comparação não tão estrita e o === faz uma comparação estrita, ou seja, o tipo de dado deve ser o mesmo quando usamos ===

10 == '10'; // true
10 == 10; // true
10 === '10'; // false
10 === 10 // true
10 != 15 // true
10 != '10' // false
10 !== '10' // true




//OPERADORES LÓGICOS &&

/*Se ambos os valores forem true ele irá retornar o último valor verificado Se algum valor for false ele irá retornar o mesmo e não irá continuar a verificar os próximos*/

true && true; // true
true && false; // false
false && true; // false
'Gato' && 'Cão'; // 'Cão'
(5 - 5) && (5 + 5); // 0
'Gato' && false; // false
(5 >= 5) && (3 < 6); // true

true || true; // true
true || false; // true
false || true; // true
'Gato' || 'Cão'; // 'Gato'
(5 - 5) || (5 + 5); // 10
'Gato' || false; // Gato
(5 >= 5) || (3 < 6); // true



//OPERADORES LÓGICOS ||

true || true; // true
true || false; // true
false || true; // true
'Gato' || 'Cão'; // 'Gato'
(5 - 5) || (5 + 5); // 10
'Gato' || false; // Gato
(5 >= 5) || (3 < 6); // true


/*Retorna o primeiro valor true que encontrar*/

// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
console.log("Exercicio abaixo")
// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);

console.log(expressao)

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;


// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

console.log("brasil tem mais habitantes q china?",brasil==china);

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log("('Gato' === 'gato') && (5 > 2)",'Verdadeiro');
} else {
  console.log("('Gato' === 'gato') && (5 > 2)", 'Falso');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gatos' && 'Cão');
} else {
  console.log('Falso');
}