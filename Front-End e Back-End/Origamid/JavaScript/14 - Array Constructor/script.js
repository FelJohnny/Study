const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
console.log(comidas);
console.log( "Remova o primeiro valor de comidas e coloque em uma variável")
comidas.shift();
console.log(comidas);

console.log("Remova o último valor de comidas e coloque em uma variável");
comidas.pop();
console.log(comidas);

console.log("Adicione 'Arroz' ao final da array");
comidas.push('Arroz');
console.log(comidas);

console.log(" Adicione 'Peixe' e 'Batata' ao início da array");
comidas.unshift('peixe','batata');
console.log(comidas);

const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
console.log("Arrume os estudantes em ordem alfabética"); 
estudantes.sort();
console.log(estudantes);
console.log("Inverta a ordem dos estudantes"); 
estudantes.reverse();
console.log(estudantes);

console.log("Verifique se Joana faz parte dos estudantes");
 console.log(estudantes.includes('Joana');
// Verifique se Juliana faz parte dos estudantes

let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`
// Substitua section por ul e div com li,
// utilizando split e join

const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável
