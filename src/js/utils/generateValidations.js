import each from 'lodash/fp/each';

const runValidation = (value, validation) => {
  switch (validation) {
    case 'required':
      if (!value) {
        return 'This field is required';
      }
  }
};

const generateValidations = (validations) => {
  const errors = {};

  return (values) => {
    each((key) => {
      each((validation) => {
        const error = runValidation(values.get(key), validation);

        if (error) {
          errors[key] = error;
        }
      })(key);
    })(validations);
  };
};

export default generateValidations;
