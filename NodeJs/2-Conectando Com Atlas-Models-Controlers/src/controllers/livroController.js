
import { autor } from "../models/Autor.js";
import livro from "../models/Livro.js";

class LivroController{

    //------------------------------GET-------------------------------------------------//
    static async ListarLivros(req, res){
        try{
            const listaLivros = await livro.find({}); //buscando no Schema do models Livro
            res.status(200).json(listaLivros);
        }catch(e){
            res.status(500).json({
                message: `${e.message} - falha na requisição`
            });
        }
    };

    //------------------------------POST-------------------------------------------------//

    static async cadastrarLivro(req,res){
        const novoLivro = req.body;
        try{
            const autorEncontrado = await autor.findById(novoLivro.autor)
            const livroCompleto = { ...novoLivro, autor: {...autorEncontrado._doc}}
            const livroCriado = await livro.create(livroCompleto)
            res.status(201).json({
                message: "criado com sucesso", 
                livro: livroCriado
            });
        }catch(erro){
            res.status(500).json({
                message: `${erro.message} - falha ao cadastrar livro`
            });
        }

    }

    //------------------------------GET-BY-ID-------------------------------------------------//

    static async BuscarlivroOnId(req,res){
        try{
            const id = req.params.id;
            const livroEncontrado = await livro.findById(id);
            res.status(200).json(livroEncontrado)
        }catch(e){
            res.status(500).json({
                message: `${e} não foi possivel encontrar a resposta`
            })
        }
    }

    //------------------------------PUT-------------------------------------------------//

    static async AlteraLivro(req,res){
        try{
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body);
            res.status(201).json({
                message: "livro alterado",
            })
        }catch(e){
            res.status(500).json({
                message: `${e} não foi possivel encontrar a resposta`
            })
        }
    }

    //------------------------------DELETE-------------------------------------------------//

    static async DeletarLivro(req,res){
        try{
            const id = req.params.id;
            await livro.findOneAndDelete(id);
            res.status(201).json({message: "Livro deletado com sucesso"})
        }catch(e){
            res.status(500).json({
                message: `${e} não foi possivel encontrar a resposta`
            })
        }
    }
};

export default LivroController