import React from 'react'
import { NavLink, Route, Routes, useParams } from 'react-router-dom'
import Pesquisa from '../Pesquisa/Pesquisa'
import Cadastrar from '../Cadastrar/Cadastrar'
import styled from 'styled-components'

const Section = styled.section`
    max-width: 1000px;
    margin: 0 auto;

    &>h1{
        padding:20px;
        border-bottom: 3px solid #747474;
    }
`

const ContainerEntidade = styled.div`
    display:grid;
    grid-template-columns:200px 2fr;
`

const ListaOptions = styled.nav`
    display: flex;
    gap: 5px;
    flex-direction:column;
    height: 500px;
    padding-top:20px;
    box-sizing:border-box;
`

const StyledNavLink = styled(NavLink)`
    color:black;
    padding: 7px 10px;
    font-size:1rem;
    background: white;
    border-radius:5px;
    margin:0 3px;
    &.active{
        background-color: #747474;
        color: white;
    }
`

const Entidade = () => {
    const params = useParams();
  return (
    <Section>
        <h1>Entidades</h1>

        <ContainerEntidade>
            <ListaOptions>
                <StyledNavLink to="pesquisa">Entidades</StyledNavLink>
                <StyledNavLink to="cadastrar">Cadastrar Entidade</StyledNavLink>
            </ListaOptions>
            <Routes>
                <Route path="pesquisa" element={<Pesquisa/>}/>
                <Route path="cadastrar" element={<Cadastrar/>}/>
            </Routes>
        </ContainerEntidade>
    </Section>
  )
}

export default Entidade
