const Services = require('./Services.js')

class CursoServices extends Services{
    constructor(){
        super('Curso');//Curso é o nome do model
    }
}

module.exports = CursoServices;