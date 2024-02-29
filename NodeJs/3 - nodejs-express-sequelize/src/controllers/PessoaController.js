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
            const mastriculasEncontradas = pessoaServices.pegaMatriculaPorId(Number(idEstudante))            
            return res.status(200).json(mastriculasEncontradas)
        }catch(e){
            return res.status(500).json({mensagem: `erro${e}`})

        }
    }
    
    async criaMatriculaPorIdController(req, res){
        try{
            const {idEstudante} = req.params;
            const mastriculasCadastradas = pessoaServices.criarMatriculaPorId(Number(idEstudante))

            return res.status(200).json(mastriculasCadastradas)
        }catch{

        }
    }
}


module.exports = PessoaController;