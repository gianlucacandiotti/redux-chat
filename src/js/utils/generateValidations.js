import each from 'lodash/fp/each';
import some from 'lodash/fp/some';
import isEmail from 'sane-email-validation';

const keydEach = each.convert({ cap: false });

const runValidation = (value, rule) => {
  console.log('value: ', value);
  console.log('rule: ', rule);
  console.log('isEmail: ', !isEmail(value));
  switch (rule) {
    case 'required':
      if (!value) {
        return 'This field is required';
      }

      break;
    case 'email':
      if (!isEmail(value)) {
        return 'Please use a valid email';
      }

      break;
    default:
      return false;
  }

  return false;
};

const generateValidations = (validationRules) => {
  return (values) => {
    const errors = {};

    keydEach((rules, field) => {
      some((rule) => {
        const error = runValidation(values.get(field) || '', rule);
        console.log(error);

        if (error) {
          errors[field] = error;
        }
        console.log(errors);
        return error;
      })(rules);
    })((validationRules));

    return errors;
  };
};

export default generateValidations;
