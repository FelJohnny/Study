import express from 'express';

import LivroController from '../controllers/livroController.js';


const routes = express.Router();

routes.get("/livros", LivroController.ListarLivros);
routes.get("/livros/busca", LivroController.buscarLivroPorEditora);
routes.get("/livros/:id", LivroController.BuscarlivroOnId);
routes.put("/livros/:id", LivroController.AlteraLivro);
routes.post("/livros", LivroController.cadastrarLivro);
routes.delete("/livros/:id", LivroController.DeletarLivro);

export default routes