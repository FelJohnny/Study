import express from 'express';

import LivroController from '../controllers/livroController.js';


const routes = express.Router();

routes.get("/livros", LivroController.ListarLivros);
routes.post("/livros", LivroController.cadastrarLivro);
routes.get("/livros/:id", LivroController.BuscarlivroOnId);
routes.put("/livros/:id", LivroController.AlteraLivro);
routes.delete("/livros/:id", LivroController.DeletarLivro);

export default routes