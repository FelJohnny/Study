const database = require('../models')
class PessoaController{

    static async RetornaTodas(req,res){
        try {
            const listaDePessoas = await database.findAll();
            return res.status(200).json(listaDePessoas)
        } catch (error) {
            console.log('deu erro')
        }
    }
}


module.exports = PessoaController