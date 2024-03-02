const User = require('../model/User.js')

module.exports={
    async store(req,res){
        const {nome, email} = req.body;
        const usuario = await User.create({
            nome,
            email,
        })
        return res.status(200).json(usuario);
    }
}