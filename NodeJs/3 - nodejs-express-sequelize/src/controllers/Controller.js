
class Controller{
    constructor(propsServices){
        this.propsServices = propsServices;
    }


    // SELECT * FROM PESSOAS
    async pegaTodosController(req,res){
        try{
            const listaDeRegistro = await this.propsServices.pegaTodosRegistros();
            return res.status(200).json(listaDeRegistro)
        }catch(e){
            //erro
        }
    }

    //UPDATE PELO ID
    async AtulizaDadoController(req, res){
        const {id}= req.params;
        const dadosAtualizados = req.body;
        console.log(dadosAtualizados)
        console.log(id)
        try{
            const foiAtulizado = await this.propsServices.atulizaDado(dadosAtualizados, Number(id))
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
}


module.exports = Controller;