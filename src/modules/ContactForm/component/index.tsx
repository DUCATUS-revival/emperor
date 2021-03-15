import React from 'react';
import { FormikProps } from 'formik';
import { Form, Input } from 'antd';
import PhoneInput from 'react-phone-input-2';

import { validateField } from '../../../utils/validate';

import './ContactForm.scss';
import 'react-phone-input-2/lib/style.css';

import { ReactComponent as NameImg } from '../../../assets/img/icons/name.svg';
import { ReactComponent as EmailImg } from '../../../assets/img/icons/email.svg';

const { TextArea } = Input;

interface IContactForm {
  username: string;
  email: string;
  message: string;
}

const ContactForm: React.FC<FormikProps<IContactForm>> = ({
  touched,
  errors,
  handleChange,
  handleBlur,
  handleSubmit,
  setFieldValue,
}: any) => {
  const onChangePhone = (value: any) => {
    setFieldValue('phone', value);
  };
  return (
    <Form name="c-form" className="c-form" layout="vertical">
      <Form.Item
        name="name"
        className="c-form__item input__field"
        validateStatus={validateField('name', touched, errors)}
        help={!touched.name ? false : errors.name}>
        <Input
          prefix={<NameImg />}
          id="name"
          className="c-form__input input"
          placeholder="Your name"
          size="large"
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </Form.Item>
      <Form.Item
        name="phone"
        className="c-form__item input__field"
        validateStatus={validateField('phone', touched, errors)}
        help={!touched.phone ? false : errors.phone}>
        {/* <Input
          id="phone"
          className="c-form__input input"
          placeholder="(201) 555-0123"
          size="large"
          onChange={handleChange}
          onBlur={handleBlur}
        /> */}
        <PhoneInput onChange={onChangePhone} />
      </Form.Item>
      <Form.Item
        name="email"
        className="c-form__item input__field"
        validateStatus={validateField('email', touched, errors)}
        help={!touched.email ? false : errors.email}>
        <Input
          id="email"
          prefix={<EmailImg />}
          className="c-form__input input"
          placeholder="Your email"
          size="large"
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </Form.Item>
      <Form.Item
        name="message"
        className="c-form__item input__field"
        validateStatus={validateField('message', touched, errors)}
        help={!touched.message ? false : errors.message}>
        <TextArea
          // maxLength={5000}
          id="message"
          // showCount={true}
          rows={6}
          className="c-form__input input"
          placeholder="Your message"
          size="large"
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </Form.Item>
      <button className="btn c-form__btn" onClick={handleSubmit}>
        ENQUIRY
      </button>
    </Form>
  );
};

export default ContactForm;
