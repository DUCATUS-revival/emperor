export const validateForm = ({ values, errors, not_required }: any) => {
  interface IRules {
    [key: string]: Function;
  }

  const rules: IRules = {
    email: (value: string): void => {
      if (!value) {
        errors.email = 'Enter your email';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        errors.email = 'Incorrect address';
      }
    },
    name: (value: string): void => {
      if (!value) {
        errors.name = 'Enter your name';
      }
    },
    phone: (value: string): void => {
      if (!value) {
        errors.phone = 'Enter your phone number';
      }
    },
    message: (value: string): void => {
      if (!value) {
        errors.message = 'Enter your message';
      }
    },
  };

  Object.keys(values).forEach(
    (key: any) =>
      rules[key] && !not_required.includes(key) && rules[key](values[key]),
  );
};

export const validateField = (key: any, touched: any, errors: any) => {
  if (touched[key]) {
    if (errors[key]) {
      return 'error';
    } else {
      return 'success';
    }
  } else {
    return '';
  }
};
