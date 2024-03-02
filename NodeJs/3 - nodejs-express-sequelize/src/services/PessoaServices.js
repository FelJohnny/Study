const Services = require('./Services.js')
const Matricula = require('../models/matricula.js')
class PessoaServices extends Services{
    constructor(){
        super('Pessoa');//Pessoa é o nome do model
    }
    async pegaMatriculaPorId(id){
        try{
            const estudante = await super.pegaUmRegistroPorId(Number(id));
            const listaMatriculas = await estudante.getMatriculaEstudante();
            
            return listaMatriculas;
        }catch(e){
            return console.log(e)
        }
    }
    async criarMatriculaPorId(id, matricula){
        try{
            const estudante = await super.pegaUmRegistroPorId(id);
            const curso = await super.pegaUmRegistroPorId(matricula.curso_id)
            console.log(curso)

            const novaMatricula = await Matricula.create({
                estudante_id: estudante.id,
                curso_id: curso.id,
                status: matricula.status,
                
            });

            //await estudante.setMatriculaEstudante(2);
            return novaMatricula;
        }catch{
            //erro
        }
    }
}

module.exports = PessoaServices;