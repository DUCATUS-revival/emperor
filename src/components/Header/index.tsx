import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

import LogoImg from '../../assets/img/icons/logo.svg';

import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="row">
        <div className="header__content">
          <Link to="/">
            <img className="header__logo" src={LogoImg} alt="" />
          </Link>
          <div className="header__navbar">
            <NavLink exact to="/" className="text-md header__link">
              Home
            </NavLink>
            <ScrollLink
              to="business"
              smooth={true}
              offset={-145}
              className="text-md header__link header__link-no">
              Our Business
            </ScrollLink>
            <ScrollLink
              smooth={true}
              offset={-145}
              to="about"
              className="text-md header__link header__link-no">
              About Us
            </ScrollLink>
            <NavLink exact to="/contact" className="text-md header__link">
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
