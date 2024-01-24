import React from 'react'
import {NavLink} from 'react-router-dom'
import styled from 'styled-components'

const Nav = styled.nav`
  display:flex;
  background-color: teal;
  `
const Lista = styled.ul`
  display:flex;
  flex-wrap:wrap;
  gap: 20px;
  margin:0 auto;
  width:1000px;
  height:60px;
  align-items:center;
  justify-content:center;
  list-style: none;
`
const ItemLista = styled.li`
  transition: transform 0.3s;
  &:hover {
    background-color: #016969;
    transform: scale(1.1);
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

  &.active{
    background-color: #2b9c9c;
    font-weight: bold;
    text-decoration:underline
  }
`
const Header = () => {
  return (
      <Nav>
        <Lista>
            <ItemLista>
                <StyledNavLink to='/'>Home</StyledNavLink>
            </ItemLista>
            <ItemLista>
                <StyledNavLink to='/entidade'>Entidade</StyledNavLink>
            </ItemLista>
            <ItemLista>
                <StyledNavLink to='/financeiro'>Financeiro</StyledNavLink>
            </ItemLista>
        </Lista>
      </Nav>
  )
}

export default Header
