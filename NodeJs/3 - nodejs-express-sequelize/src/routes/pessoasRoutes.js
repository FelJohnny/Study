const {Router} = require('express');

const PessoaController = require('../controllers/PessoaController.js');

const pessoaController = new PessoaController();
const router = Router();

router.get('/pessoas', (req, res)=>{ pessoaController.pegaTodosController(req, res)});
router.put('/pessoas/:id', (req, res)=>{ pessoaController.AtulizaDadoController(req, res)});

module.exports= router