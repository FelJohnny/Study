const {Router} = require('express');

const CategoriaController = require('../controllers/CategoriaController.js');

const categoriaController = new CategoriaController();
const router = Router();

router.post('/categorias', (req, res)=>{ categoriaController.criaRegistroController(req, res)});
router.get('/categorias', (req, res)=>{ categoriaController.pegaTodosController(req, res)});
router.get('/categorias/:id', (req, res)=>{ categoriaController.pegaUmRegistroPorIdController(req, res)});
router.put('/categorias/:id', (req, res)=>{ categoriaController.atulizaDadoController(req, res)});
router.delete('/categorias/:id', (req, res)=>{ categoriaController.excluiRegistroController(req, res)});



module.exports= router