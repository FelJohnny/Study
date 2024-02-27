const e = require("express");

class Controller{
    constructor(propsServices){
        this.propsServices = propsServices;
    }

//-----------CREATE--------------//
    async criaRegistroController(req, res) {
        const dadosParaCriacao = req.body;
        try {
            const novoRegistroCriado = await this.propsServices.criaRegistro(dadosParaCriacao);
            return res.status(200).json(novoRegistroCriado);
        } catch (e) {
            return res.status(400).json({menssagem:`erro ao criar, mensagem do erro:${e}`})//erro
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


}


module.exports = Controller;