import {livros} from './dadosUltimosLancamentos'
import Pesquisa, { ContainerLivros} from '../Pesquisa';
import { Titulo } from '../Titulo';
import styled from 'styled-components';

export const Livro = styled.section`
    color: #FFF;
    text-align: center;
    cursor:pointer;
    transition: 500ms ease-in-out;
    width: 209px;

    &:hover{
        transform: scale(1.1)
`
function UltimosLancamento(){
    return(
        <section>
            <ContainerLivros>
            <Titulo color=''>Ultimos Lancamento</Titulo>
                {livros.map(livro =>(
                    <Livro>
                        <img src={livro.src}/>
                        <p>{livro.nome}</p>
                    </Livro>
                    ))}
            </ContainerLivros>
        </section>
    );
}

export default UltimosLancamento;