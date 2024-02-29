const Services = require('./Services.js')

class CategoriaServices extends Services{
    constructor(){
        super('Categoria');//Categoria é o nome do model
    }
}

module.exports = CategoriaServices;