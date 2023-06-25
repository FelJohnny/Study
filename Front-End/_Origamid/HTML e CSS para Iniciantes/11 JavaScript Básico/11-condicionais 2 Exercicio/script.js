const botao = document.querySelector(".botao")
let contador = document.querySelector(".cont")
let total
function somar(){
    if(contador.innerHTML < 10){
        contador.innerHTML = Number(contador.innerHTML) + 1 ;
        console.log(contador)
    }else{
        console.log('Nao e possivel adicionar mais')
    }
}
if(botao){
    botao.addEventListener("click",somar);
}
