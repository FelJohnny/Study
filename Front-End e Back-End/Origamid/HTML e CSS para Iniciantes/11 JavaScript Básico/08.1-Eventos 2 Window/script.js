//O window é um objeto que representa a janela do browser e contém todo o dom. 
//Esse objeto além de possuir diversas propriedades e métodos com informações sobre a página,
// pode também receber eventos globais.

//mostra largura da tela
console.log(window.innerWidth)

/**@param{MouseEvent} event*/
function coordenadaMouse(event){
    const cordenadas ={
        x: event.x,
        y: event.y,
    }
    console.log(cordenadas);
}

window.addEventListener('mousemove',coordenadaMouse);

function scrollnatela(event){
    console.log("usou o scrol");
    console.log(window.scrollY)
}

window.addEventListener("scroll",scrollnatela)