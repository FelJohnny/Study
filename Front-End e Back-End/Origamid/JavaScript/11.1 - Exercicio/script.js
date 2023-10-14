// Duplique o menu e adicione ele em copy

// Selecione o primeiro DT da dl de Faq

// Selecione o DD referente ao primeiro DT

// Substitua o conteúdo html de .faq pelo de .animais


console.log('Duplique o menu e adicione ele em copy ');

const nav =  document.querySelector(".menu");
const footer = document.querySelector('.copy');
const Pfooter = footer.querySelector('p');
const cloneNav = nav.cloneNode(true);

//footer.appendChild(nav) //adicionou como ultimo filho do footer
footer.insertBefore(nav,Pfooter) // adicionou anter do Pfooter(paragrafo)
console.log(footer.outerHTML)



console.log("Selecione o primeiro DT da dl de Faq")
const dl = document.querySelector('.faq-lista')
const dtdl = dl.querySelectorAll('dt');//COM NODELIST

console.log(dtdl[0])//COM NODELIST
//console.log(dl.children[0])//COM HTML ELEMENTLIST

console.log('Selecione o DD referente ao primeiro DT');

const dddl = dl.querySelectorAll('dd');//COM NODELIST

console.log(dddl[dtdl.length- dtdl.length]);




console.log("Substitua o conteúdo html de .faq pelo de .animais");
const faq = document.querySelector('.faq');
const animais = document.querySelector('.animais');

//  const cloneAnimais = animais.cloneNode(true);

//  faq.replaceChildren(cloneAnimais)

faq.innerHTML = animais.innerHTML;