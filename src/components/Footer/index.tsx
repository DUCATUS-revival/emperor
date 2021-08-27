import React from 'react'
import { NavHashLink } from 'react-router-hash-link'

import './Footer.scss'

import LogoImg from '../../assets/img/icons/logo-w.svg'
import { CorporateGovernancePopover } from '../CorporateGovernancePopover'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__bg'>
        <div className='row row-md'>
          <div className='footer__content'>
            <NavHashLink to='/#top' smooth>
              <img src={LogoImg} alt='emperor' className='footer__logo' />
            </NavHashLink>
            <div className='footer__navbar'>
              <div className='footer__link'>
                <NavHashLink smooth to='/#top' className=' text-md'>
                  Home
                </NavHashLink>
              </div>
              <div className='footer__link'>
                <NavHashLink to='/#business' smooth={true} className='text-md'>
                  Our Business
                </NavHashLink>
              </div>
              <div className='footer__link'>
                <NavHashLink to='/#about' smooth={true} className='text-md'>
                  About us
                </NavHashLink>
              </div>
              <div className='footer__link'>
                <CorporateGovernancePopover baseDirection={false}>
                  <div className='text-md'>Corporate Governance</div>
                </CorporateGovernancePopover>
              </div>
              <div className='footer__link'>
                <NavHashLink to='/contact' className='text-md'>
                  Contact
                </NavHashLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
