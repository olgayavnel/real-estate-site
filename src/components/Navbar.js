import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components/macro';
import { Link, useLocation } from 'react-router-dom';
import { menuData } from '../data/MenuData';
import { Button } from './Button';
import { FaBars } from 'react-icons/fa';
import useEventListener from '../utils/UseEventListener';
import { NAV_HEIGHT_PX } from '../utils/heights';

const Nav = styled.nav`
  height: 60px;
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 100;
`;

const NavLink = css`
  color: white;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;

  &: hover {
    transform: translateY(-2px);
  }
`;

const Logo = styled(Link)`
  ${NavLink}
  font-size: italic;
`;

const MenuBars = styled(FaBars)`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    transform: translate(-50%, 25%);
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavMenuLinks = styled(Link)`
  ${NavLink}
`;

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Navbar = ({ toggle }) => {
  const [navbar, setNavbar] = useState('');
  const location = useLocation();

  const listenToScrollEvent = () => {
    window.scrollY > NAV_HEIGHT_PX ? setNavbar(true) : setNavbar(false);
  };

  useEventListener('scroll', listenToScrollEvent);

  let style = {
    backgroundColor:
      navbar || location.pathname !== '/' ? '#CD853F' : 'transparent',
    transition: '0.4s',
  };

  return (
    <Nav style={style}>
      <Logo to='/'>ELIXR</Logo>
      <MenuBars onClick={toggle} />
      <NavMenu>
        {menuData.map((item, index) => (
          <NavMenuLinks to={item.link} key={index}>
            {item.title}
          </NavMenuLinks>
        ))}
      </NavMenu>
      <NavBtn>
        <Button to='/contact' primary='true'>
          Contact Us
        </Button>
      </NavBtn>
    </Nav>
  );
};

export default Navbar;
