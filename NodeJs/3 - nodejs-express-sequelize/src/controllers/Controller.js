
class Controller{
    constructor(propsServices){
        this.propsServices = propsServices;
    }
    async pegaTodos(req,res){
        try{
            const listaDeRegistro = await this.propsServices.pegaTodosRegistros();
            return res.status(200).json(listaDeRegistro)
        }catch(e){
            //erro
        }
    }
}


module.exports = Controller;