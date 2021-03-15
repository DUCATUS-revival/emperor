import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

import './Footer.scss';

import LogoImg from '../../assets/img/icons/logo-w.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__bg">
        <div className="row row-md">
          <div className="footer__content">
            <Link to="/">
              <img src={LogoImg} alt="emperor" className="footer__logo" />
            </Link>
            <div className="footer__navbar">
              <div className="footer__link">
                <Link to="/" className=" text-md">
                  Home
                </Link>
              </div>
              <div className="footer__link">
                <ScrollLink
                  to="business"
                  smooth={true}
                  offset={-145}
                  className="text-md">
                  Our Business
                </ScrollLink>
              </div>
              <div className="footer__link">
                <ScrollLink
                  to="about"
                  smooth={true}
                  offset={-145}
                  className="text-md">
                  About us
                </ScrollLink>
              </div>
              <div className="footer__link">
                <Link to="/" className="text-md">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
