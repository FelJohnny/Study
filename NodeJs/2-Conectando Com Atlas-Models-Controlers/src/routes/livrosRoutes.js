import express from 'express';

import LivroController from '../controllers/livroController.js';


const routes = express.Router();

routes.get("/livros", LivroController.ListarLivros);
routes.post("/livros", LivroController.cadastrarLivro);

export default routes