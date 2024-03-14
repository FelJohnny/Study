document.body.style.background="#3c3c3c"

//interface normalmente utilizado para objetos

interface interfaceProduto{
   nome:string;
   idade:number;
   maiorIdade: boolean;
}


async function fetchProduct() {
   const response = fetch('https://api.origamid.dev/json/notebook.json');
   const json = await (await response).json();
   showProduct(json);
 }
 
 fetchProduct();
 
interface Produto{
   nome:string,
   preco: number,
   descricao: string
   empresaFabricante:{
      nome:string
   }
}

 function showProduct(json: Produto) {
   document.body.innerHTML = `
     <div>
       <h2>${json.nome}</h2>
       <h2>${json.preco}</h2>
       <h2>${json.descricao}</h2>
       <h2> Empresa Fabricante: ${json.empresaFabricante.nome}</h2>
     </div>
   `;
 }