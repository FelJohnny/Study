import {livros} from './dadosUltimosLancamentos'
import { ContainerLivros} from '../Pesquisa';
import { Titulo } from '../Titulo'
import { Livro } from '../Livro';


function UltimosLancamento(){
    return(
        <section>
            <ContainerLivros>
            <Titulo color=''>Ultimos Lancamento</Titulo>
                {livros.map(livro =>(
                    <Livro>
                        <img 
                            src={livro.src}
                            className="imgLivro"
                             />
                        <p>{livro.nome}</p>
                    </Livro>
                    ))}
            </ContainerLivros>
        </section>
    );
}

export default UltimosLancamento;