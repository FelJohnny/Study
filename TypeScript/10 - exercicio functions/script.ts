const body = document.querySelector('body');
if (body) {
    body.style.backgroundColor = 'black';
}

// Crie uma função que arredonda um valor passado para cima.
// A função pode receber string ou number.
// A função deve retornar o mesmo tipo que ela receber.

//R: com o overload ao rodar a função o retorno da função fica explicitamente definido, ajudando o typescript a entender o tipo do retorno da função
function arredondar(valor: string): string; 
function arredondar(valor: number): number;
function arredondar(valor: string | number):string | number{
    if(typeof valor === 'number'){
        return  Math.ceil(valor)
    }else{
        return Math.ceil(Number(valor)).toString()
    }
}

console.log(arredondar('10.5'));
console.log(arredondar(10.5));



