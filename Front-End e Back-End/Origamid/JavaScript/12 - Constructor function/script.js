function Carro(marca, preco){
    this.marca = marca;
    this.preco = preco;
}

const honda = new Carro('Honda', 4000);
const fiat = new Carro('Fiat', 5000);
console.log(honda, fiat)

function Carro2(marca, precoInicial){
    const taxa = 1.2;
    const precoFinal = precoInicial * taxa;
    this.marca = marca;
    this.preco = precoFinal;
}
const citroen = new Carro2('citroen', 100);




function Dom(seletor){
    this.seletor= seletor,
    this.element = function(){
        return document.querySelector(this.seletor);
    }
    this.ativar = function(classe){
        this.element().classList.add(classe);

    }
}

const li = new Dom('li'); //criando objeto li
console.log(li.element()) //retorna a ul selecionada;
console.log(li.ativar('teste')) //adiciona a classe 'teste' na primeira li
const ul = new Dom('ul');