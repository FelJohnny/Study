import React from 'react'
import {NavLink} from 'react-router-dom'
import styled from 'styled-components'

const Nav = styled.nav`
  display:flex;
  align-items:center;
  background-color: teal;
  height:60px;

`
const Lista = styled.ul`
  display:flex;
  gap: 20px;
  margin: 0 auto;
  max-width:1000px;
  justify-content:center;
  list-style: none;

`
const ItemLista = styled.li`
  transition: transform 0.3s;
  &:hover {
    background-color: #016969;
    transform: scale(1.2);
  }

`

const StyledNavLink = styled(NavLink)`
  color: white;
  padding: 10px 25px;
  background-color: #004949;
  border-radius:5px;
  &:focus,
  &:active {
    outline: none;  
    background-color: #2b9c9c;

  } 
`
console.log(Nav)
const Header = () => {
  return (
      <Nav>
        <Lista>
            <ItemLista>
                <StyledNavLink to='/'>Home</StyledNavLink>
            </ItemLista>
            <ItemLista>
                <StyledNavLink to='/cadastrar'>Cadastrar</StyledNavLink>
            </ItemLista>
            <ItemLista>
                <StyledNavLink to='/pesquisa'>Pesquisa</StyledNavLink>
            </ItemLista>
        </Lista>
      </Nav>
  )
}

export default Header
