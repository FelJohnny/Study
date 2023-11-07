import perfil from '../../imagens/perfil.svg'
import sacola from '../../imagens/sacola.svg'
import styled from 'styled-components'
const icones = [sacola, perfil]

const ListaIcones = styled.ul`
  display: flex;
`
const Icone = styled.li`
  margin-right: 40px;
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