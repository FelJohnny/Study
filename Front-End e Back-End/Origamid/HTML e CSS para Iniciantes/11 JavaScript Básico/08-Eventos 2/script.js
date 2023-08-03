const botao = document.querySelector('.botao');

function mostar(){
    const texto = document.querySelector(".texto");
    //adiciona uma classe na tag
    //texto.classList.add('ativar')

    //remove uma classe na tag
    //texto.classList.remove('ativar')

    
    //remove e ativa uma classe caso nao exista ou caso exista
    texto.classList.toggle('ativar');
}

botao.addEventListener('click',mostar)