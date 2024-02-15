//const database = require('../models')
const {Pessoa} = require('../models')
class PessoaController{

    static async RetornaTodas(req,res){
        try {
            //const listaDePessoas = await database.Pessoa.findAll();
            const listaDePessoas = await Pessoa.findAll();
            return res.status(200).json(listaDePessoas)
        } catch (error) {
            console.log(`deu erro ${error}`)
            return res.status(500).json(`deu erro, ${error}`)
        }
    }
}


module.exports = PessoaController