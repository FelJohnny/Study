import http from 'http';

//definindo porta, a 3000 é de uso geral
const PORT = 3000;

const rotas = {
    "/": "Primeira rota definida",
    "/livros": "estou na rota livros",
    "/pessoas": "sao pessoas"
}

const server = http.createServer((req, res)=>{
    res.writeHead(200, {"Content-type": "application/json"}); //resposta ou retorno do tipo texto/plano //200 ok
    res.end(rotas[req.url]); // busca minhas rotas sempre que uma requisição é feita
})


//iniciando o servidor em uma porta especifica
server.listen(PORT, ()=>{
    console.log("servidor escutando");
});