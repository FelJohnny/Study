

function Mousemovimenta(evento){
    //declara as variaveis atribuindo o valor de x e y retornando ao parametro evento
    const x = evento.x;
    const y = evento.y
    
    //busco a classe circulo do meu html
    const circulo = document.querySelector(".circulo");
    //altero minha classe circulo aplicando o top e left em seus atributos
    circulo.style.top = y + "px";
    circulo.style.left = x + "px"
};

//utilizo o window para  ter nocao do espaco dajanela no navegar
// addevent adiciono um evento
//(do tipo mousemove, )
// e executando a funcao criada Mousemovimenta a cada vez que o mousemove receber o retorno da function
window.addEventListener("mousemove",Mousemovimenta)





//jeito mais eficiente de rodar o codigo acima

//busco a classe circulo do meu html do lado de fora da funcao
const circulo = document.querySelector(".circulo");

function Mousemovimenta(evento){
    //altero minha classe circulo aplicando o top e left em seus atributos
    circulo.style.top = evento.y + "px";
    circulo.style.left = evento.x + "px"
};
