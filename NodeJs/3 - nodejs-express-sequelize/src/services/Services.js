const dataModels = require('../models')

class Services {
    constructor(nomeDoModel){
        this.model = nomeDoModel;
    }
    async pegaTodosRegistros(){
        return dataModels[this.model].findAll();
    }
}


module.exports = Services;