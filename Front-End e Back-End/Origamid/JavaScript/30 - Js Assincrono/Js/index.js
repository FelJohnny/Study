const promessa = new Promise((resolve, reject) =>{
    let condicao =true;
    if(condicao){
        resolve({nome: 'johnny', idade:23})
    }else{
        reject(Error('Um erro ocorreu na promisse'))
    }
})


promessa.then((resolucao) =>{ // primeiro argumento traz o resolve da promise
    console.log(resolucao) //nome: 'johnny', idade:23
});

//alternativa mais curta de codigo

promessa.then(retornoResolve => console.log(retornoResolve))

//-------------------------------------------------------//

const promessaAsync = new Promise((resolve, reject) =>{
    let condicao =true;
    if(condicao){
        setTimeout(()=> {
            resolve({nome: 'Joao', idade:20})
        },2000);//2sec
    }else{
        reject(Error('Um erro ocorreu na promisse'))
    }
});


const retorno = promessaAsync
.then(retorno => {
    console.log(retorno) //retorna o objeto promiseResult fica undefined por conta do objeto
    retorno.profissao ='Ti'
    return retorno
})
.then(retorno => 'teste')// sobrescreve apos execucao do then acima e promiseResult ficara 'teste'


console.log(retorno) //antes dos 2secs a promisse 'promessaAsync' fica como pending

//--------------------------all-----------------------------//

const login = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve('usuario logado')
    },1000)
})

const dados = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve('Dados carregados')
    },1500)
})


const carregouTudo = Promise.all([login, dados]);

carregouTudo.then(resolucao => console.log(resolucao)) //retorna uma array



//----------------------------race--------------------------

const carregouPrimeiro = Promise.race([login, dados]); // retorna o primeiro retorno da promise

carregouPrimeiro.then(resposta =>{
    console.log(resposta)
})