const dataModels = require('../models')

class Services {
    constructor(nomeDoModel){
        this.nomeDoModel = nomeDoModel;
    }
    async pegaTodosRegistros(){
        return dataModels[this.nomeDoModel].findAll();
    }
}


module.exports = Services;