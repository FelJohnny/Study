
import {autor} from "../models/Autor.js";

class AutorController{

    //------------------------------GET-------------------------------------------------//
    static async ListarAutores(req, res){
        try{
            const listaAutores = await autor.find({});
            res.status(200).json(listaAutores);
        }catch(e){
            res.status(500).json({
                message: `${e.message} - falha na requisição`
            });
        }
    };

    //------------------------------POST-------------------------------------------------//

    static async cadastrarAutor(req,res){
        try{
            const novoAutor = await autor.create(req.body);
            res.status(201).json({
                message: "criado com sucesso", 
                livro: novoAutor
            });
        }catch(erro){
            res.status(500).json({
                message: `${erro.message} - falha ao cadastrar autor`
            });
        }

    }

    //------------------------------GET-BY-ID-------------------------------------------------//

    static async BuscarAutorOnId(req,res){
        try{
            const id = req.params.id;
            const autorEncontrado = await autor.findById(id);
            res.status(200).json(autorEncontrado)
        }catch(e){
            res.status(500).json({
                message: `${e} não foi possivel encontrar a resposta`
            })
        }
    }

    //------------------------------PUT-------------------------------------------------//

    static async AlteraAutor(req,res){
        try{
            const id = req.params.id;
            await autor.findByIdAndUpdate(id, req.body);
            res.status(201).json({
                message: "Autor alterado",
            })
        }catch(e){
            res.status(500).json({
                message: `${e} não foi possivel encontrar a resposta`
            })
        }
    }

    //------------------------------DELETE-------------------------------------------------//

    static async DeletarAutor(req,res){
        try{
            const id = req.params.id;
            await autor.findOneAndDelete(id);
            res.status(201).json({message: "Autor deletado com sucesso"})
        }catch(e){
            res.status(500).json({
                message: `${e} não foi possivel encontrar a resposta`
            })
        }
    }
};

export default AutorController