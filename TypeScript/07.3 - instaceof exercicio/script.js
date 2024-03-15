"use strict";
document.body.style.background = "#3c3c3c";
//1 - Selecione o link utilizando o método getElementById.
//2 - Substitua o href do link (HTMLAnchorElement) de http:// para https://.
const link = document.getElementById('origamid');
if (link instanceof HTMLAnchorElement) {
    console.log(link.href.replace('http', 'https'));
}
const link2 = document.getElementById('origamid');
console.log(link2?.__proto__);
console.log(link2?.__proto__.__proto__);
console.log(link2?.__proto__.__proto__.__proto__);
console.log(link2?.__proto__.__proto__.__proto__.__proto__);
console.log(link2?.__proto__.__proto__.__proto__.__proto__.__proto__);
