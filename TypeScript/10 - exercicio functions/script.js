"use strict";
const body = document.querySelector('body');
if (body) {
    body.style.backgroundColor = 'black';
}
function arredondar(valor) {
    if (typeof valor === 'number') {
        return Math.ceil(valor);
    }
    else {
        return Math.ceil(Number(valor)).toString();
    }
}
console.log(arredondar('10.5'));
console.log(arredondar(10.5));
