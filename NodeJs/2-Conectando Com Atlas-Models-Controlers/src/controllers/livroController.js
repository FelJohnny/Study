
import livro from "../models/Livro.js";

class LivroController{

    static async ListarLivros(req, res){
        const listaLivros = await livro.find({}); //buscando no Schema do models Livro
        res.status(200).json(listaLivros);
    };

    static async cadastrarLivro(req,res){
        try{
            const novoLivro = await livro.create(req.body);
            res.status(201).json({
                message: "criado com sucesso", 
                livro: novoLivro
            });
        }catch(erro){
            res.status(500).json({
                message: `${erro.message} - falha ao cadastrar livro`
            });
        }

    }
};

export default LivroController