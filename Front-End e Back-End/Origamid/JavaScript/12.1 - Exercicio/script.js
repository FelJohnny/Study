console.log("Crie uma função construtora de Pessoas Deve conter nome, sobrenome e idade Crie um método no protótipo que retorne o nome completo da pessoa");

function Pessoas(nome, sobrenome, idade){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
    this.nomeCompleto = function(){
        return this.nome + ' ' + this.sobrenome +' possui '+ this.idade+' anos de idade' ;
    }
}

const pessoa1 = new Pessoas('Felipe','Johnny', 23);
const pessoa2 = new Pessoas('Sarah','Alm', 20);

console.log(pessoa1.nomeCompleto());
console.log(pessoa2.nomeCompleto());


/*----------------------------------------------------------------------------------------------*/

console.log("Liste os métodos acessados por dados criados com NodeList, HTMLCollection, Document");

console.log("Objeto: NodeList ");
console.log (Object.getOwnPropertyNames(NodeList));
console.log(NodeList.prototype);
console.log('');
console.log("Objeto: HTMLCollection ");
console.log (Object.getOwnPropertyNames(HTMLCollection));
console.log(HTMLCollection.prototype);
console.log('');
console.log("Objeto: Document ");
console.log (Object.getOwnPropertyNames(Document));
console.log(Document.prototype);

/*----------------------------------------------------------------------------------------------*/

console.log("Liste os construtores dos dados abaixo");

const li = document.querySelector('li');

console.log( (li))
console.log('li.click')
console.log( Object.getOwnPropertyNames(li.click))
console.log('li.InnerText')
console.log( Object.getOwnPropertyNames(li.innerText))
console.log('li.value')
console.log( Object.getOwnPropertyNames(li.value))
console.log('li.hidden')
console.log( Object.getOwnPropertyNames(li.hidden))
console.log('li.click()')
//console.log( Object.getOwnPropertyNames(li.click()));

/*----------------------------------------------------------------------------------------------*/


console.log("Qual o construtor do dado abaixo:")
console.log("li.hidden.constructor.name;")
console.log(li.hidden.constructor.name);
console.log("R: String")