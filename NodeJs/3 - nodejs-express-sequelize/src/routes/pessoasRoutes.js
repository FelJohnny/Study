const {Router} = require('express');

const PessoaController = require('../controllers/PessoaController.js');

const pessoaController = new PessoaController();
const router = Router();

router.post('/pessoas', (req, res)=>{ pessoaController.criaRegistroController(req, res)});
router.get('/pessoas', (req, res)=>{ pessoaController.pegaTodosController(req, res)});
router.get('/pessoas/:id', (req, res)=>{ pessoaController.pegaUmRegistroPorIdController(req, res)});
router.put('/pessoas/:id', (req, res)=>{ pessoaController.atulizaDadoController(req, res)});
router.delete('/pessoas/:id', (req, res)=>{ pessoaController.excluiRegistroController(req, res)});
router.post('/pessoas/:idEstudante/matriculas', (req, res)=>{ pessoaController.criaMatriculaPorIdController(req, res)});
router.get('/pessoas/:idEstudante/matriculas', (req, res)=>{ pessoaController.pegaMatriculaPorIdController(req, res)});




module.exports= router