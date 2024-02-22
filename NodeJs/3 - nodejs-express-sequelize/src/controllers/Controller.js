
class Controller{
    constructor(entidadeService){
        this.entidadeService = entidadeService;
    }
    async pegaTodos(req,res){
        try{
            const listaDeRegistro = await this.entidadeService.pegaTodosRegistros();
            return res.status(200).json(listaDeRegistro)
        }catch(e){
            //erro
        }
    }
}

module.exports = Controller;