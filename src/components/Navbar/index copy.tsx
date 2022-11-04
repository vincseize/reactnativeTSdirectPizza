import React from 'react';
import './NavbarElements.css';

import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';

import Logo from '../../images/logo.png';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img src={Logo} className="App-logo" alt="logo" />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/">Direct PIZZA PATA</NavLink>
          {/* <NavLink to="/">Accueil</NavLink> */}
          <NavLink to="/nospizzas">Nos Pizzas</NavLink>
          <NavLink to="/formules">Formules</NavLink>
          <NavLink to="/horaires">Horaires</NavLink>

          {/* 2nd Nav */}
          {/* <NavBtnLink to="/signin">Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/login">Login</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
