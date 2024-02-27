const Services = require('./Services.js')

class PessoaServices extends Services{
    constructor(){
        super('Pessoa');//Pessoa é o nome do model
    }
}

module.exports = PessoaServices;