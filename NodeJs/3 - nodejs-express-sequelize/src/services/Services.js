const dataModels = require('../models')

class Services {
    constructor(nomeDoModel){
        this.nomeDoModel = nomeDoModel;
    }

    //-------------CREATE-------------//
    async criaRegistro(dadosDoRegistro) {
        return dataModels[this.nomeDoModel].create(dadosDoRegistro);
    }
    
    //-----------READ--------------//
    async pegaTodosRegistros(){
        return dataModels[this.nomeDoModel].findAll();
    }

    //-----------UPDATE--------------//
    async atualizaDado(dadosAtualizados, id){
        const ListaDeRegistrosAtualizado = dataModels[this.nomeDoModel].update(dadosAtualizados,{
            where:{id:id}
        });
        console.log(ListaDeRegistrosAtualizado)
        if(ListaDeRegistrosAtualizado[0] === 0){
            return false;
        }else{
            return true
        }
    }
    //-----------DELETE--------------//
}


module.exports = Services;