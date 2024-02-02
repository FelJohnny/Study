import express from 'express';

import AutorController from '../controllers/autorController.js';


const routes = express.Router();

routes.get("/autores", AutorController.ListarAutores);
routes.post("/autores", AutorController.cadastrarAutor);
routes.get("/autores/:id", AutorController.BuscarAutorOnId);
routes.put("/autores/:id", AutorController.AlteraAutor);
routes.delete("/autores/:id", AutorController.DeletarAutor);


export default routes