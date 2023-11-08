import perfil from '../../imagens/perfil.svg'
import sacola from '../../imagens/sacola.svg'
import styled from 'styled-components'
const icones = [sacola, perfil]

const ListaIcones = styled.ul`
  display: flex;
  gap: 15px;
`
const Icone = styled.li`
  
  width: 25px;
  cursor: pointer;
`


function IconesHeader(){
  return(
    <ListaIcones>
      { icones.map((icone)=>(
        <Icone><img src={icone} alt='icon'></img></Icone>
      ))}
    </ListaIcones>
  )

}

export default IconesHeader;