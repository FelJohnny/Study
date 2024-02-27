const e = require("express");

class Controller{
    constructor(propsServices){
        this.propsServices = propsServices;
    }

    //------------------------------------CREATE-------------------------------------------//
    async criaRegistroController(req, res) {
        const dadosParaCriacao = req.body;
        try {
            const novoRegistroCriado = await this.propsServices.criaRegistro(dadosParaCriacao);
            return res.status(200).json(novoRegistroCriado);
        } catch (e){
            return res.status(400).json({menssagem:`erro ao criar, mensagem do erro:${e}`})
        }
   }

    //-------------------------------------READ-------------------------------------//
    async pegaTodosController(req,res){
        try{
            const listaDeRegistro = await this.propsServices.pegaTodosRegistros();
            return res.status(200).json(listaDeRegistro)
        }catch(e){
            //erro
        }
    }
    //-------------------------------------READ-POR-ID-------------------------------------//

    async pegaUmRegistroPorIdController(req, res) {
        const { id } = req.params;
        try{
            const umRegistro = await this.propsServices.pegaUmRegistroPorId(Number(id));
            return res.status(200).json(umRegistro);
        }catch (erro){
            return res.status(400).json({menssagem:`erro ao buscar registro, mensagem do erro: ${e}`})
        }
   }

    //-------------------------------------UPDATE PELO ID-------------------------------------//
    async atulizaDadoController(req, res){
        const {id}= req.params;
        const dadosAtualizados = req.body;
        try{
            const foiAtulizado = await this.propsServices.atualizaDado(dadosAtualizados, Number(id))
            if(!foiAtulizado){
                res.status(400).json({mensagem: `o registro não ${id} foi atualizado`})
                
            }else{
                res.status(200).json({mensagem: `registro atualizado`})
                console.log(foiAtulizado)

            }
        }catch(e){
            console.log(e)
        }
    }

    //-------------------------------------DELETE PELO ID-------------------------------------//

    async excluiRegistroController(req, res) {
        const { id } = req.params;
        try {
            await this.propsServices.excluiRegistro(Number(id));
            console.log(id)
            return res.status(200).json({ mensagem: `id ${id} deletado` });
        }catch (error) {
            return res.status(500).json(error.message);
        }
   }

}


module.exports = Controller;