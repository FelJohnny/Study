import Input from "../Input";
import styled from "styled-components";
import { useState } from "react";
import { livros } from "./dadosPesquisa"
import { Titulo } from "../Titulo";
import { Livro } from "../Livro";

const PesquisaContainer = styled.section`
    color: #FFF;
    text-align: center;
    padding: 85px 0;   
    width: 100%; 
    background-image: linear-gradient(90deg,rgb(5, 88, 88), rgb(10, 163, 184));
`
const Subtitulo = styled.h3`
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 40px;
`
export const ContainerLivros = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content: center;
    gap: 20px 40px;
    margin-top: 80px;
    
`

function Pesquisa(){
    const [livrosPesquisados, setLivrosPesquisados] = useState(['']);
    return(
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
            <Input
                placeholder="Escreva sua proxima leitura"
                onBlur={evento => {
                    const textoDigitado = evento.target.value;
                    const resultadoPesquisa = livros.filter( livro => livro.nome.includes(textoDigitado))
                    console.log(resultadoPesquisa)
                    setLivrosPesquisados(resultadoPesquisa)
                }}
            />
            <ContainerLivros>
                {livrosPesquisados.map((livro)=>(
                    <Livro>
                        
                        <img 
                            src={livro.src}
                            className="imgLivro"
                        />
                        <p>{livro.nome}</p>
                    </Livro>
                ))}
            </ContainerLivros>
            
        </PesquisaContainer>
    );
}
export default Pesquisa;
