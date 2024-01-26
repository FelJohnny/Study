import  express from "express";

const app = express();
app.use(express.json()) // mideware, executa em todas as requisições e transforma em json, as requisicoes normalmente chegam como string

const livros =[
    {
        id: 1,
        titulo: 'Diario de um banana'
    },
    {
        id: 2,
        titulo: 'outro livro :)'
    }
];

function buscaLivro(id){ //comparando livro. com o id passado pelo parametro da function(no caso do get)
    return livros.findIndex(livro =>{
        return livro.id ===Number(id);
    })
}



// GET RETORNA
app.get("/",(req, res)=>{
    res.status(200).send("Resposta do servidor")

});

app.get("/livros",(req, res)=>{
    res.status(200).json(livros);
});

//busca um livro especifico do array
app.get("/livros/:id",(req, res)=>{
    const index = buscaLivro(req.params.id);
    res.status(201).json(livros[index])
})

//PUSH ENVIA
app.post("/livros",(req, res)=>{
    livros.push(req.body);
    res.status(201).send("livro cadastrado com sucesso")
});


//PUT ALTERA

app.put("/livros/:id",(req, res)=>{
    const index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(200).json(livros[index]);
})

export default app;