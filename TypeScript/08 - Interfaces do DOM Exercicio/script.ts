document.body.style.background="#3c3c3c"

//https://developer.mozilla.org/pt-BR/docs/Web/API

//1 - Selecione os elementos com a classe link.

//2 - Crie uma função que deve ser executada para cada elemento.

//3 - Modificar através da função o estilo da color e border.

const links = document.querySelectorAll('.link')

console.log(links);
links.forEach(link=>{
  if(link instanceof HTMLButtonElement){
    link.style.border='2px solid red';
    console.dir(link);
  }else if(link instanceof HTMLAnchorElement){
    link.style.border='2px solid green';
    console.dir(link);
    
  }
})