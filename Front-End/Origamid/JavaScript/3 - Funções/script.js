function areaQuadrado(lado) {
    return lado * lado;
}

console.log("executando funcão lado * lado", areaQuadrado(4));






//------------FUNÇÃO DE EXECUÇÃO
/*Parênteses () executam uma função */

function pi() {
    return 3.14;
}

var total = 5 * pi();

console.log('de pi * 5',total);



/*Separar por vírgula cada parâmetro. Você pode definir mais de um parâmetro ou nenhum também */

function imc(peso, altura) {
    const imc = peso / (altura ** 2);
    return imc;
}

var imc_total = imc(60, 1.70);

console.log(imc_total);


function CorFavorita(cor) {
    if (cor === 'azul') {
        return 'você gosta de azul';
    } else if (cor === 'verde') {
        return 'voce gosta de mato'
    } else {
        return 'voce não gosta de nada'
    }
}

cor = CorFavorita('verde');

console.log(cor);

/*Se apenas definirmos a função com o function e não executarmos a mesma, nada que estiver dentro dela irá acontecer*/

//-------------------CALLBACK---------------------------------

addEventListener('click', function () { console.log('clicou'); });

//pode ou não retornar valor

function imc(peso2, altura2){
    const imc = peso2 / (altura2 ** 2);
    console.log("testeaa",imc);  // retorna o imc e undefined
}


//Uma função pode retornar qualquer tipo de dado e até outras funções.

function terceiraIdade(idade) {
    if(typeof idade !== 'number') {
      return 'Informe a sua idade!';
    }
     else if(idade >= 60) {
      return true;
    }
     else {
      return false;
    }
  }


  console.log('idade maior que 60?',idade = terceiraIdade(60));

//Variáveis e funções definidas dentro de um bloco {}, não são visíveis fora dele.

function precisoVisitar(paisesVisitados) {
    var totalPaises = 193;
    return `Ainda faltam ${totalPaises - paisesVisitados} paises para visitar`
  }

  //console.log(totalPaises); // erro, totalPaises não definido
  console.log(paises = precisoVisitar(60)); 
  





 var profissao = 'Designer';

function dados() {
  var nome = 'André';
  var idade = 28;
  function outrosDados() {
    var endereco = 'Rio de Janeiro';
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

dados(); 

//outrosDados(); // retorna um erro


console.log(dados()); // Retorna 'André, 29, Rio de Janeiro, Designer'