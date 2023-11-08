import styled from 'styled-components';

const ListaOpcoes = styled.ul`
  display: flex;

  @media(max-width: 770px){
    flex-direction: column;
  }
`
const Opcoes = styled.li`
  display: flex;
  font-size: 16px;
  min-width: 100px;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 10px;
  cursor: pointer;
`
const textoOpcoes = ['CATEGORIAS','FAVORITOS', 'MINHA ESTANTE'];

function OpcoesHeader(){
    return(
        <ListaOpcoes>
        { textoOpcoes.map((texto)=>(
          <Opcoes><p>{texto}</p></Opcoes>
        ) ) }
      </ListaOpcoes>
    );
    
}

export default OpcoesHeader;