const database = require('../models')
class PessoaController{

    static async RetornaTodas(req,res){
        try {
            const listaDePessoas = await database.findAll();
            return res.status(200).json(listaDePessoas)
        } catch (error) {
            
        }
    }
}


module.exports = PessoaController