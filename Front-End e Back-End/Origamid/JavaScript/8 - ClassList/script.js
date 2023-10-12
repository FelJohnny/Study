 const menu = document.querySelector('.menu');

// menu.className; // string
// menu.classList; // lista de classes
// menu.classList.add('ativo');
// menu.classList.add('ativo', 'mobile'); // duas classes
// menu.classList.remove('ativo');
// menu.classList.toggle('ativo'); // adiciona/remove a classe
// menu.classList.contains('ativo'); // true ou false
// menu.classList.replace('ativo', 'inativo');

menu.classList.add('azul');
console.log(menu.classList);

if(menu.classList.contains('azul')){
    console.log("possui classe azul")
}else{
    console.log("não possui")
}

const animais = document.querySelector('.animais');

//mostra os atribtos da tag
console.log(animais.attributes)
//seleciona a posição do atrubuto
console.log(animais.attributes[1])

const img = document.querySelector('img')

//puxa o conteudo do atributo
console.log(img.getAttribute('src'));
//define um novo atributo ou substitui existente
img.setAttribute('alt', 'é uma raposa');

console.log(img.getAttribute('alt'));
//remove atributo
img.removeAttribute('alt')
console.log(img.getAttribute('alt'));




// Adicione a classe ativo a todos os itens do menu
console.log("Adicione a classe ativo a todos os itens do menu")

const menuex = document.querySelectorAll(".menu li");

menuex.forEach((item) => {
    console.log(item)
    
    item.classList.add('ativo');
});

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
console.log('Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro');

menuex.forEach((item) => {
    console.log(item)
    item.classList.remove('ativo');
});
menuex[0].classList.add('ativo');


// Verifique se as imagens possuem o atributo alt

console.log("Verifique se as imagens possuem o atributo alt")

const imagens = document.querySelectorAll('img');
console.log(imagens)
//teste condicional
imagens[0].setAttribute('alt','teste');
imagens[4].setAttribute('alt','teste');

imagens.forEach((img, index) =>{
    if(img.hasAttribute('alt')){
        console.log("imagem "+ index +" possui o alt como atributo");
    }else{
        console.log("imagem "+ index +" NÃO possui o alt como atributo");
    }
}) 
// Modifique o href do link externo no menu

console.log("Modifique o href do link externo no menu");

const link = document.querySelector('a[href^="http"');

console.log("antes")
console.log(link)
console.log("depois")
link.setAttribute('href','google.com')
console.log(link)

