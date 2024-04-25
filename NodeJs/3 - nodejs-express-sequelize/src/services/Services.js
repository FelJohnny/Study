const dataModels = require('../database/models')

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

    async pegaUmRegistroPorId(id) {
        return  dataModels[this.nomeDoModel].findByPk(id);
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
    async excluiRegistro(id) {
        return dataModels[this.nomeDoModel].destroy({ where: { id: id } });
    }
}


module.exports = Services;