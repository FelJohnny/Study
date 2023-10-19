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
console.log(estudantes.includes('Joana'));
console.log("Verifique se Juliana faz parte dos estudantes");
console.log(estudantes.includes('Juliana'));


let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`
console.log("Substitua section por ul e div com li, utilizando split e join")
console.log(html);
html = html.split('section').join('ul').split('div').join('li');
console.log(html);;



console.log("Remova o último carro, mas antes de remover, salve a array original em outra variável: ")
const carros = ['Ford', 'Fiat', 'VW', 'Honda'];

carros2 = carros.slice();
console.log("original alterado: ");
carros.pop();
carros.shift();
console.log(carros)
console.log('copia:')
console.log(carros2)
