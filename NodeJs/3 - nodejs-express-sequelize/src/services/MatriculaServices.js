const Services = require('./Services.js')

class MatriculaServices extends Services{
    constructor(){
        super('Matricula');//Matricula é o nome do model
    }
}

module.exports = MatriculaServices;