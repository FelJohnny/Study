const img = document.querySelector("img");

function retorno(e){
    const selecionado = e.target; //onde o clique ocorreu
    const ouvinte = e.currentTarget; //this ouvinte do click
    const tipo = e.type; //mostra o tipo do evento
    const path = e.path;

    console.log(e ,selecionado, ouvinte, tipo, path);
}

img.addEventListener('click', retorno)


// muda cor do body ao pressionar as setas direcionais

function presskey(e){
    
    if(e.key === 'ArrowRight'){
        teclaPressionada = console.log(e.key);
        document.querySelector('body').style="background: #fb5";
        return(teclaPressionada);
    }else if(e.key === 'ArrowLeft'){
        teclaPressionada = console.log(e.key);
        document.querySelector('body').style="background: red";
    }else if(e.key === 'ArrowUp'){
        teclaPressionada = console.log(e.key);
        document.querySelector('body').style="background:";

    }
}

window.addEventListener('keydown', presskey)






function retorno2(e){
    const selecionado = e.currentTarget; //onde o clique ocorreu
    const tipo = e.type; //mostra o tipo do evento
    const txt = console.log(e);
     i++;
    console.log(selecionado, tipo);
}

const imgs = document.querySelectorAll("img");
let i = 0;

imgs.forEach((item,) =>{
    item.addEventListener('click',retorno2);
})