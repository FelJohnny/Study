document.body.style.background="#3c3c3c"

function preencherDados(dados:{
   nome:string;
   preco:number;
   teclado:boolean;
}){
   document.body.innerHTML +=`
      <h2>${dados.nome}</h2>
      <p>${dados.preco}</p>
      <p>inclui teclado: ${dados.teclado?'sim':'não'}
   `;
}

preencherDados({
   nome:"computador",
   preco:1000,
   teclado:true
})

preencherDados({
   nome:"note",
   preco:2000,
   teclado:false
})

// type e interfaces facilitam o codigo acima

type NumberOrString = string | number;

let total: NumberOrString;

//total = true;
total = "1000";


//---------------------------------------------Type-----------------------------------------

type Produto = {
   nome:string;
   preco:number;
   teclado:boolean;
}

const computador: Produto ={
   nome:"produto com type",
   preco:2000,
   teclado:false
}
preencherDadosType(computador)

function preencherDadosType(dados: Produto){
   document.body.innerHTML +=`
   <h2>${dados.nome}</h2>
   <p>${dados.preco}</p>
   <p>inclui teclado: ${dados.teclado?'sim':'não'}
   `;
}


preencherDadosType({
   nome:"computador",
   preco:1000,
   teclado:true
})


type categoria = 'desing' |'codigo';

function pintarCategoria(categoria: categoria){
   console.log(categoria);
   
}

//pintarCategoria("codddigo")
pintarCategoria("codigo")