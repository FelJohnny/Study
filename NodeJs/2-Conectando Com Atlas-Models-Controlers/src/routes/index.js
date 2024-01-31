import express from 'express';
import livros from  './livrosRoutes.js'
import { autor } from '../models/Autor.js';

const routes = (app)=>{
    app.route("/").get((req, res)=> res.status(200).send("pagina principal"))

    app.use(express.json(), livros, autor ) // midleware, executa em todas as requisições e transforma em json, as requisicoes normalmente chegam como string

};


export default routes;