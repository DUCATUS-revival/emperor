import React from 'react';

import { ContactForm } from '../../modules';

import './Contact.scss';

const ContactPage = () => {
  return (
    <main className="contact">
      <div className="contact__preview">
        <div className="row row-md">
          <h1 className="h1 contact__preview-title">Contact</h1>
        </div>
      </div>
      <div className="lines">
        <div className="row row-lg">
          <div className="contact__content">
            <div className="contact__info text-md">
              <div className="contact__info-title">Vistra Limited</div>
              <p>P.O. Box 31119 Grand Pavilion,</p>
              <p>Hibiscus Way, 802 West Bay Road,</p>
              <p>Grand Cayman, KYI-1205 Cayman Islands</p>
              <a href="mailto:admin@emperor-holdings.com">
                admin@emperor-holdings.com
              </a>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
