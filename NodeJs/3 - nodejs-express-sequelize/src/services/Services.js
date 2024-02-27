const dataModels = require('../models')

class Services {
    constructor(nomeDoModel){
        this.nomeDoModel = nomeDoModel;
    }
    
    async pegaTodosRegistros(){
        return dataModels[this.nomeDoModel].findAll();
    }

    async atulizaDado(dadosAtualizados, id){
        const ListaDeRegistrosAtualizado = dataModels[this.nomeDoModel].update({dadosAtualizados},{
            where:{id:id}
        });
        console.log(ListaDeRegistrosAtualizado)
        if(ListaDeRegistrosAtualizado[0] === 0){
            return false;
        }else{
            return true
        }
    }
}


module.exports = Services;