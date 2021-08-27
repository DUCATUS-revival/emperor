import React from 'react';
import { NavHashLink } from 'react-router-hash-link';
import classNames from 'classnames';

import './Header.scss';

import LogoImg from '../../assets/img/icons/logo.svg';
import NavOpenImg from '../../assets/img/icons/nav-open.svg';
import NavCloseImg from '../../assets/img/icons/nav-close.svg';
import { CorporateGovernancePopover } from '../CorporateGovernancePopover';

const Header = () => {
  const [isNavbarOpen, setNavbarOpen] = React.useState<boolean>(false);
  const height = window.innerWidth < 767 ? -50 : -145;
  return (
    <header className='header'>
      <div className='row'>
        <div className='header__content'>
          <div className='header__btn hidden-d'></div>
          <NavHashLink to='/#top' smooth>
            <img className='header__logo' src={LogoImg} alt='' />
          </NavHashLink>
          <div
            className='header__btn hidden-d'
            onClick={() => setNavbarOpen(!isNavbarOpen)}
          >
            {isNavbarOpen ? (
              <img src={NavCloseImg} alt='' />
            ) : (
              <img src={NavOpenImg} alt='' />
            )}
          </div>
          <div className='header__navbar hidden-m'>
            <NavHashLink
              exact
              smooth
              to='/#top'
              className='text-sm header__link'
            >
              Home
            </NavHashLink>
            <NavHashLink
              to='/#business'
              smooth={true}
              className='text-sm header__link'
            >
              Our Business
            </NavHashLink>
            <NavHashLink
              smooth={true}
              to='/#about'
              className='text-sm header__link'
            >
              About Us
            </NavHashLink>
            <CorporateGovernancePopover className='header__link'>
              <div className='text-sm'>Corporate Governance</div>
            </CorporateGovernancePopover>
            <NavHashLink exact to='/contact' className='text-sm header__link'>
              Contact
            </NavHashLink>
          </div>
        </div>
      </div>
      <div
        className={classNames('header__menu hidden-d', {
          open: isNavbarOpen,
        })}
      >
        <div className='header__menu-nav'>
          <NavHashLink
            exact
            smooth
            to='/#top'
            className=' h1 header__menu-link'
            onClick={() => setNavbarOpen(false)}
          >
            Home
          </NavHashLink>
          <NavHashLink
            onClick={() => setNavbarOpen(false)}
            to='/#business'
            smooth
            className=' h1 header__menu-link'
          >
            Our Business
          </NavHashLink>
          <NavHashLink
            onClick={() => setNavbarOpen(false)}
            smooth={true}
            to='/#about'
            className=' h1 header__menu-link'
          >
            About Us
          </NavHashLink>
          <CorporateGovernancePopover
            className='h1 header__menu-link'
            menuItemClick={() => setNavbarOpen(false)}
          >
            <div>Corporate Governance</div>
          </CorporateGovernancePopover>
          <NavHashLink
            onClick={() => setNavbarOpen(false)}
            exact
            to='/contact'
            className=' h1 header__menu-link'
          >
            Contact
          </NavHashLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
