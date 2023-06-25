//metodo e uma funcao que pertence a um objeto

const botao = document.querySelector('.botao');

/**@param{MouseEvent} evento */
function ativarAoClick(evento){
    //mostrando conteudo da tag/class
    console.log('clicou em:', botao.innerHTML);
    //mostrando a tag completa que pertence a "botao"
    console.log('clicou em:', botao)
    // utilizando TypeScript onde o @param ajuda a declarar mostrar a propriedade do parametro
    console.log(evento.x);
}

//addEventListener ativa um evento (evento, funcao a ser executada);

botao.addEventListener('click',ativarAoClick);