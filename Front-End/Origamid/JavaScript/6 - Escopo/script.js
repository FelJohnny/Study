// Por qual motivo o código abaixo retorna com erros?
//{
//   var cor = 'preto';
//   const marca = 'Fiat';
//   let portas = 4;
//}
  //console.log(var, marca, portas);

  //corrigindo

//nao acessa por conta do escopo, variaveis declaradas dentro de chaves nao vaza {}
  {
    var cor = 'preto';
    const marca = 'Fiat';
    let portas = 4;
    console.log(cor, marca, portas);
  }

//declarando dentro resolve

  
  // Como corrigir o erro abaixo?
  const dois = 2;
  function somarDois(x) {
    return x + dois;
  }
  function dividirDois(x) {
    return x / dois;
  }
  console.log(somarDois(4));
  console.log(dividirDois(6));
  console.log(`resolvido`)
  
  // O que fazer para total retornar 500?
  var numero = 50;
  
  for(let numero = 0; numero < 10; numero++) {
    console.log(numero);
  }
  
  const total = 10 * numero;
  console.log(total);
  
  //alterar de var pra let no loop pois var vaza do escopo