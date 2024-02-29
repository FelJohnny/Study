const {Router} = require('express');

const CursoController = require('../controllers/CursoController.js');

const cursoController = new CursoController();
const router = Router();

router.post('/cursos', (req, res)=>{ cursoController.criaRegistroController(req, res)});
router.get('/cursos', (req, res)=>{ cursoController.pegaTodosController(req, res)});
router.get('/cursos/:id', (req, res)=>{ cursoController.pegaUmRegistroPorIdController(req, res)});
router.put('/cursos/:id', (req, res)=>{ cursoController.atulizaDadoController(req, res)});
router.delete('/cursos/:id', (req, res)=>{ cursoController.excluiRegistroController(req, res)});



module.exports= router