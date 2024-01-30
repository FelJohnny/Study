import  express from "express";
import conectaNaDataBase from "./config/dbConnect.js";
import routes from './routes/index.js'

/*------------------------------------------data-base------------------------------------------------------------- */

const conexao = await conectaNaDataBase();

conexao.on("error", (erro)=>{
    console.error("erro de conexao", erro);
});

conexao.once("open", ()=>{
    console.log("Conexao com o banco feita com sucesso");
});


/*------------------------------------------------------------------------------------------------------- */
const app = express();
routes(app);

//app.get("/livros",async (req, res)=>{
//  const listaLivros = await livro.find({}); //buscando no Schema do models Livro
//  res.status(200).json(listaLivros);
//});

//busca um livro especifico do array
app.get("/livros/:id",(req, res)=>{
    const index = buscaLivro(req.params.id);
    res.status(201).json(livros[index])
})

//PUSH ENVIA
//app.post("/livros",(req, res)=>{
//    livros.push(req.body);
//    res.status(201).send("livro cadastrado com sucesso")
// });


//PUT ALTERA

app.put("/livros/:id",(req, res)=>{
    const index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(200).json(livros[index]);
})


app.delete("/livros/:id",(req, res)=>{
    const index = buscaLivro(req.params.id);
    livros.splice(index, 1);
    res.status(200).json(livros);
});




export default app;