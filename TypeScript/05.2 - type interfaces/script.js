"use strict";
document.body.style.background = "#3c3c3c";
async function fetchProduct() {
    const response = fetch('https://api.origamid.dev/json/notebook.json');
    const json = await (await response).json();
    showProduct(json);
}
fetchProduct();
function showProduct(json) {
    document.body.innerHTML = `
     <div>
       <h2>${json.nome}</h2>
       <h2>${json.preco}</h2>
       <h2>${json.descricao}</h2>
       <h2> Empresa Fabricante: ${json.empresaFabricante.nome}</h2>
     </div>
   `;
}
