const Controller = require('./Controller.js');
const PessoaServices = require('../services/PessoaServices.js')

const pessoaServices = new PessoaServices();
class PessoaController extends Controller{
    constructor(){
        super(pessoaServices);
    }
    
    async pegaMatriculaPorIdController(req, res){
        try{
            const {idEstudante} = req.params;
            const mastriculasEncontradas = await pessoaServices.pegaMatriculaPorId(Number(idEstudante))
            return res.status(200).json(mastriculasEncontradas)
        }catch(e){
            return res.status(500).json({mensagem: `erro${e}`})

        }
    }
    
    async criaMatriculaPorIdController(req, res){
        try{
            const {idEstudante} = req.params;
            const matricula = req.body;
            const mastriculasCadastradas = await pessoaServices.criarMatriculaPorId(Number(idEstudante), matricula)
            return res.status(200).json({mensagm: 'matricula criada,',matricula: mastriculasCadastradas})
        }catch{

        }
    }
}


module.exports = PessoaController;