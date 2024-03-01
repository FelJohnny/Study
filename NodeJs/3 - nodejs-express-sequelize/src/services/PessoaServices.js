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
            console.log(matricula.status)

            const novaMatricula = await Matricula.create({
                status: matricula.status,
                estudante_id: estudante.id,
                
            });

            //await estudante.setMatriculaEstudante(2);
            return novaMatricula;
        }catch{
            //erro
        }
    }
}

module.exports = PessoaServices;