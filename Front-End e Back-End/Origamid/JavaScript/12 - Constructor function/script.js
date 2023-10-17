function Carro(marca, preco){
    this.marca = marca;
    this.preco = preco;
}

const honda = new Carro('Honda', 4000);
const fiat = new Carro('Fiat', 5000);
console.log(honda);
console.log(fiat);
console.log(fiat.preco);


function Carro2(marca, precoInicial){
    const taxa = 1.2;
    const precoFinal = precoInicial * taxa;
    this.marca = marca;
    this.preco = precoFinal;
}
const citroen = new Carro2('citroen', 100);




function Dom2(seletor){
    this.seletor= seletor,
    this.element = function(){
        return document.querySelector(this.seletor);
    }
    this.ativar = function(classe){
        this.element().classList.add(classe);

    }
}

const li = new Dom2('li'); //criando objeto li
console.log(li.element('teste')) //retorna a ul selecionada;
li.ativar('teste') //adiciona a classe 'teste' na primeira li
const ul = new Dom2('ul');

/*---------------------------------------------------------------------------------------------------------------------------------*/

console.log("exercicio: ")

function Pessoa(nome, idade){
    this.nome = nome;
    this.idade = idade;
    this.andar = function(){
        console.log(this.nome + ' andou');
    }
}

const pessoa = new Pessoa('joao', 20);
const pessoa2 = new Pessoa('Maria', 25);
const pessoa3 = new Pessoa('Bruno', 15);

function Dom(seletor){
    const elementList = document.querySelectorAll(seletor);
    this.addClass = function(classe){
        elementList.forEach((item, index)=>{
            item.classList.add(classe);
            console.log('classe '+ index+' adicionada');            
        })
    }
    this.removeClass = function(classe){
        elementList.forEach((item, index)=>{
            item.classList.remove(classe);
            console.log( 'classe '+ index+' removida');
        })
    }
    
}

const lista = new Dom('li');
lista.addClass('classeAdicionada') // adicionado classe
lista.removeClass('classeAdicionada') // removendo