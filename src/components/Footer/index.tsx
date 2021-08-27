import React from 'react';
import { NavHashLink } from 'react-router-hash-link';

import './Footer.scss';

import LogoImg from '../../assets/img/icons/logo-w.svg';
import { CorporateGovernancePopover } from '../CorporateGovernancePopover';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__bg'>
        {/* <div className='row row-md'> */}
        <div className='footer__content'>
          <NavHashLink to='/#top' smooth>
            <img src={LogoImg} alt='emperor' className='footer__logo' />
          </NavHashLink>
          <div className='footer__navbar'>
            <div className='footer__link'>
              <NavHashLink smooth to='/#top' className='text-sm'>
                Home
              </NavHashLink>
            </div>
            <div className='footer__link'>
              <NavHashLink to='/#business' smooth={true} className='text-sm'>
                Our Business
              </NavHashLink>
            </div>
            <div className='footer__link'>
              <NavHashLink to='/#about' smooth={true} className='text-sm'>
                About us
              </NavHashLink>
            </div>
            <div className='footer__link'>
              <CorporateGovernancePopover
                className='footer__link-list'
                baseDirection={false}
              >
                <span className='text-sm'>Corporate Governance</span>
              </CorporateGovernancePopover>
            </div>
            <div className='footer__link'>
              <NavHashLink to='/contact' className='text-sm'>
                Contact
              </NavHashLink>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </footer>
  );
};

export default Footer;
