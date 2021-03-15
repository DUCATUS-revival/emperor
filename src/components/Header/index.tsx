import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import classNames from 'classnames';

import './Header.scss';

import LogoImg from '../../assets/img/icons/logo.svg';
import NavOpenImg from '../../assets/img/icons/nav-open.svg';
import NavCloseImg from '../../assets/img/icons/nav-close.svg';

const Header = () => {
  const [isNavbarOpen, setNavbarOpen] = React.useState<boolean>(false);
  const height = window.innerWidth < 767 ? -50 : -145;
  return (
    <header className="header">
      <div className="row">
        <div className="header__content">
          <div className="header__btn hidden-d"></div>
          <Link to="/">
            <img className="header__logo" src={LogoImg} alt="" />
          </Link>
          <div
            className="header__btn hidden-d"
            onClick={() => setNavbarOpen(!isNavbarOpen)}>
            {isNavbarOpen ? (
              <img src={NavCloseImg} alt="" />
            ) : (
              <img src={NavOpenImg} alt="" />
            )}
          </div>
          <div className="header__navbar hidden-m">
            <NavLink exact to="/" className="text-md header__link">
              Home
            </NavLink>
            <ScrollLink
              to="business"
              smooth={true}
              offset={height}
              className="text-md header__link header__link-no">
              Our Business
            </ScrollLink>
            <ScrollLink
              smooth={true}
              offset={height}
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
      <div
        className={classNames('header__menu hidden-d', {
          open: isNavbarOpen,
        })}>
        <div className="header__menu-nav">
          <NavLink
            exact
            to="/"
            className=" h1 header__menu-link"
            onClick={() => setNavbarOpen(false)}>
            Home
          </NavLink>
          <ScrollLink
            onClick={() => setNavbarOpen(false)}
            to="business"
            smooth={true}
            offset={height}
            className=" h1 header__menu-link header__link-no">
            Our Business
          </ScrollLink>
          <ScrollLink
            onClick={() => setNavbarOpen(false)}
            smooth={true}
            offset={height}
            to="about"
            className=" h1 header__menu-link header__link-no">
            About Us
          </ScrollLink>
          <NavLink
            onClick={() => setNavbarOpen(false)}
            exact
            to="/contact"
            className=" h1 header__menu-link">
            Contact
          </NavLink>
        </div>
        <img className="header__menu-logo" src={LogoImg} alt="" />
      </div>
    </header>
  );
};

export default Header;
