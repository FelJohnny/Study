const h1 = document.querySelector('h1')
const listaAnimais  = document.querySelector('.animais-lista')


//INNNERHTML MOSTRA CONTEUDO DE DENTRO DA TAG EM FORMA DE TEXTO
console.log(h1.innerHTML);
console.log(listaAnimais.innerHTML);
//INNERText  SO MOSTRA SE FOR TEXTO
console.log(h1.innerText)
console.log(listaAnimais.innerText);//nao aparece bada

// mostra a tag por completo
console.log(h1.outerHTML)

// PARENTELENT pega os pais que envolvem a tag
console.log(listaAnimais.parentElement.parentElement.parentElement)


//pega a tag seguinte abaixo
console.log(listaAnimais.nextElementSibling)

///pega a tag anterior acima
console.log(listaAnimais.previousElementSibling)

// lista os filhos da tag como HTMLCOLLECTION
console.log(listaAnimais.children)

//SELECIONANDO FILHO ESPECIFICO
console.log(listaAnimais.children[0])

//o NODE considera todos elementos filho, ate mesmo comentarios e quebra de linhas
console.log(listaAnimais.childNodes);

//transforma li's que estao dentro da listaAnimais EM NODELIST
itens = listaAnimais.querySelectorAll('li');
console.log(listaAnimais.querySelectorAll('li'));
console.log(itens[2])//SELECIONANDO FILHO ESPECIFICO



const nav = document.querySelector("nav");
const linav = nav.querySelectorAll('a')
const footer = document.querySelector('.copy');
console.log(linav)
nav.appendChild(footer) // move o objeto selecionado como ultimo filho 
//nav.insertBefore(vai ser inserido antes de:, quem Vai ser movido  )


const novah1 = document.createElement('h1')

novah1.innerText="Novo titulo";
novah1.classList.add('titulo');

const descricaoAnimais = document.querySelector('.animais-descricao');
const descricaoAnimaisH2 = descricaoAnimais.querySelector('h2');
console.log(descricaoAnimais)
console.log(novah1)
descricaoAnimais.appendChild(novah1)//INSERE NOVA H1 APOS DESCRICAO ANIMAIS

const listaimg = document.querySelector('.animais-lista')
const grid = document.querySelector('.grid-section');
const gridNode = grid.childNodes;
const cloneNav = nav.cloneNode(true)
console.log(grid)
console.log(gridNode)
grid.insertBefore(cloneNav, gridNode[2]);
