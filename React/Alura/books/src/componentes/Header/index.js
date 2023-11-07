import Logo from '../Logo';
import OpcoesHeader from '../OpcoesHeader';
import IconesHeader from '../IconesHeader';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #e7e7e7;
  display: flex;
  justify-content: center;
  align-items: center;

  li{
    list-style: none;
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