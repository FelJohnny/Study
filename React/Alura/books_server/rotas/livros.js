const {Router} = require("express") // importando uma função expedifica de express

const router = Router()

//criando ações da rota http

router.get("/", (req, res) =>{     //req = request(demandado)   res= response(devolve)
    res.send("Ola mundo")
})

module.exports = router // habilitando exportação