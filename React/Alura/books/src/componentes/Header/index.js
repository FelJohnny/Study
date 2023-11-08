import Logo from '../Logo';
import OpcoesHeader from '../OpcoesHeader';
import IconesHeader from '../IconesHeader';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #e7e7e7;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  justify-content: center;
  
  @media(max-width: 770px){
    flex-direction: column;
  }
`

function Header(){
  return(
    <HeaderContainer>
      <Logo/>
      <OpcoesHeader/>
      <IconesHeader/>
    </HeaderContainer>
)
    
}

export default Header;