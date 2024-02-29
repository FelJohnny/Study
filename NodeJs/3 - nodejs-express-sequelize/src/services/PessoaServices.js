const Services = require('./Services.js')

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
    async criarMatriculaPorId(id){
        try{
            const estudante = await super.pegaUmRegistroPorId(id);
            const listaMatriculas = await estudante.setMatriculaEstudante();
            console.log(listaMatriculas)
            return listaMatriculas;
        }catch{
            //erro
        }
    }
}

module.exports = PessoaServices;