function NomeFunc(){
    const nome = "JavaScript"
    console.log(nome);
}


NomeFunc();
NomeFunc();
NomeFunc();


/*o argumento(Johnny) que é oq retorna a function/parametro(nome)*/
function Funcao2(nome){
  console.log(nome);
}

Funcao2("Johnny");


function Funcao3(nome, horas){
    console.log(nome, horas, "horas");
    return nome;
}

Funcao3("Maria", 40)


const retornoDaFuncao = Funcao3("Ichigo", 40)

console.log(retornoDaFuncao)

/*retornando objeto */
function Funcao4(nome, horas){
    console.log(nome, horas, "horas");
    return {
        nome,
        horas,
    };
}

console.log(Funcao4);


const nome = "JavaScript"
/* variaveis podem ser acessadas externamente da function, caso umavariavel com o mesmo nome seja declara dentro da func, a mesma sera priorizada */
function logCurso(){
    console.log(nome);
}

logCurso();