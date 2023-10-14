const img = document.querySelector('img');

function clique(e){
    
    console.log(e);
}

img.addEventListener('click', clique)


const listimagens = document.querySelector(".animais-lista");

function callbackLista(event){
    console.log(event.currentTarget) // informa a tag da lista
    console.log(event.target.getAttribute('src'))
    console.log(event.target)// mostra a imagem especifica da lista, filhos
    console.log(event.type)//mostra o tipo do evento
    console.log(this.getAttribute('class'))//this referencia ao elemento listaimagens, não aos filhos da lista
}

listimagens.addEventListener('click', callbackLista)

const linkExterno = document.querySelector('a[href^="http"]');

function handleLinkExterno(event){
    event.preventDefault(); //previne que o evento padrao execute(o link href nao abre)
    console.log("funciona")
    console.log(this.getAttribute('href'))//vai mostrar o link de toda tag <a> selecionada
}

linkExterno.addEventListener('click', handleLinkExterno)



const h1 = document.querySelector('h1');


function handleEvent(e){
    console.log("evento no h1");
    console.log(e.type, e)

}

h1.addEventListener('click', handleEvent);
//h1.addEventListener('mouseenter', handleEvent);//mouse passou por cima(contabiliza uma vez a cada entrada e saida)
//h1.addEventListener('mousemove', handleEvent);//contabiliza toda movimentação do mouse por cima do h1

function windowEvent(e){
    console.log("envento do window");
    console.log(e.type, e)
}

//window.addEventListener('scroll', windowEvent);
window.addEventListener('resize', windowEvent);
window.addEventListener('keydown', windowEvent);

//pratica

function mudaColor(e){
    if(e.key === 'ArrowRight'){
        e.target.style.color='red';
        console.log(e.target)
    }else if(e.key === 'ArrowLeft'){
        e.target.style.color='blue';
        console.log(e.target)
    }else if(e.key === 'ArrowUp'){
        e.target.style.color='';
        console.log(e.target)

    }
}

console.log(document)
document.addEventListener('keydown', mudaColor);


//foreach

const imglist = document.querySelectorAll('img');


function clickArray(imgDaLista){
    console.log("a")
    console.log(imgDaLista.target);
}

imglist.forEach((e) =>{
    e.addEventListener('click', clickArray)
});


// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const linkInterno = document.querySelectorAll('a[href^="#"]');


function addclass(e){
    console.log("adicionando class ativo e removendo dos demais")
    e.preventDefault();
    linkInterno.forEach((link)=>{
        link.removeAttribute('class','ativo');
    });
    e.target.setAttribute('class','ativo')
    console.log(linkInterno)
}

linkInterno.forEach((item) =>{
    item.addEventListener('click', addclass)
})

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

const body = document.querySelectorAll('body');


function mostra(e){
    console.log(e.target)
}
body.forEach((item)=>{
    item.addEventListener('click', mostra);
})

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

function remove(e){
    console.log("removeu o elemento");
    e.target.remove();
}
body.forEach((item)=>{
    item.addEventListener('click', remove);
})
// Se o usuário clicar na tecla (t), aumente todo o texto do site. 


function aumentaFonte(e){
    if(e.key ==='t'){
        console.log(e.target.style.backgroud="red")
    }
}

document.addEventListener('keydown',aumentaFonte);