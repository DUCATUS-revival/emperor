import React from 'react';
import { withFormik } from 'formik';

import ContactForm from '../component';
import { validateForm } from '../../../utils/validate';
import axios from '../../../config/axios';

interface ContactFormProps {
  name: string;
  email: string;
  message: string;
  phone: string;
}

export default () => {
  const FormWithFormik = withFormik<any, ContactFormProps>({
    enableReinitialize: true,
    mapPropsToValues: () => ({
      name: '',
      email: '',
      phone: '',
      message: '',
    }),
    validate: (values) => {
      let errors = {};

      validateForm({ values, errors, not_required: [] });

      return errors;
    },

    handleSubmit: (values) => {
      axios
        .post('contact_us/', values)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    },

    displayName: 'ContactForm',
  })(ContactForm);
  return <FormWithFormik />;
};
