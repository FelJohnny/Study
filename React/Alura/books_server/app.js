const express = require("express")//importando o express
const rotaLivro = require("./rotas/Livro")//importando rota livro

const app = express()     //adicioando as propriedades e funcoes do expres na variavel

app.use('/livros', rotaLivro) 

const port = 8000

app.listen(port, () =>{        // fica enxergando a porta parametrizada
    console.log(`escutando a porta ${port}`)
})

//para ter hot reload instalar o "npm install nodemon"