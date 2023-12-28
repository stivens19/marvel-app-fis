import React from 'react'
import { Outlet } from 'react-router-dom';
import { GlobalStyle, Navbar, Logo, NavbarLinks, NavbarLink as Link, SearchInput } from './styles/styles';
import { useContext } from 'react';
import marvelContext from './context/marvelContext';

const MarvelApp = () => {
  const {searchCharacters} = useContext(marvelContext);
  const handleInputChange = (e) => {
    if(e.target.value.length>2){
      searchCharacters(e.target.value);
    }
  }
  return (
    <>
      <GlobalStyle />
      <Navbar>
        <Link to="/">
          <Logo>MARVEL</Logo>
        </Link>
        <SearchInput onChange={handleInputChange} placeholder="Buscar"/>
        <NavbarLinks>
          <Link to="/">
            Comics
          </Link>
          <Link to="/">
            Eventos
          </Link>
          <Link to="/">
            Creadores
          </Link>
        </NavbarLinks>
      </Navbar>
      <Outlet />
    </>
  )
}

export default MarvelApp