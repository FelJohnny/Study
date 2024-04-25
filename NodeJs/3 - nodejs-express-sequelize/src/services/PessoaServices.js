const Services = require('./Services.js')
const Matricula = require('../database/models/matricula.js')
const MatriculaServices = require('./MatriculaServices.js');
const matricula = new MatriculaServices()
class PessoaServices extends Services{
    constructor(){
        super('Pessoa');//Pessoa é o nome do model
    }
    async pegaMatriculaPorId(id){
        try{
            const estudante = await super.pegaUmRegistroPorId(Number(id));
            if(!estudante){
                return res.status(500).json({mensagem:"estudante não encontrado"})
            }

            const listaMatriculas = await estudante.getMatriculaEstudante();
            
            if(!listaMatriculas){
                return res.status(500).json({mensagem:"matricula não encontrada"})
            }else{
                return listaMatriculas
            }
            
        }catch(e){
            return console.log(e)
        }
    }

    
    async criarMatriculaPorId(id, reqMatricula){
        try{
            //console.log(reqMatricula)
            const estudante = await super.pegaUmRegistroPorId(id);
            //console.log(estudante)
            const curso = await matricula.pegaUmRegistroPorId(reqMatricula.curso_id)
            //console.log(curso)

            const novaMatricula = await Matricula.create({
                estudante_id: estudante.id,
                curso_id: curso.id,
                status: reqMatricula.status,
                
            });

            //await estudante.setMatriculaEstudante(2);
            return novaMatricula;
        }catch(e){
            //erro
        }
    }
}

module.exports = PessoaServices;