import livro from '../../imagens/livro.png';
import Modal from '../Modal';
import { useState } from "react";



export const livros = [
    {nome: 'Diario de um Banana',id: 1, src:livro},
    {nome: 'Extraordinário',id: 2, src:livro},
    {nome: 'A cabana',id: 3, src:livro},
    {nome: 'Harry Potter e as Relíquias da Morte',id: 4, src:livro},


]

onclick = function(evento){     
    if(evento.target.localName == "img"){ //valida se oq foi clicado é uma imagem
        
        const cliq = evento.target.getAttribute("class"); 

        if(evento.target.getAttribute("class")){ //valida se a imagem selecionada possui uma classe
            if(cliq.includes("imgLivro")){ // se a classe dessa imagem é "imgLivro"
                console.log('é um livro')
            }else{
                console.log("não é um livro")
            }
        }
    }
}