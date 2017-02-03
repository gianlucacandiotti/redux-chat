import validate from 'utilities/validate';
import forIn from 'lodash/fp/forIn';
const forInWithKeys = forIn.convert({ 'cap': false });

const Form = (data) => {
  const instanceData = {};

  forInWithKeys((value, key) => {
    if (!data[key].value) {
      instanceData[key] = Object.assign({}, data[key], {
        value: '',
      });
    } else {
      instanceData[key] = data[key];
    }
  })(data);

  return Object.assign({}, instanceData, {
    updateValue(key, value) {
      this[key].value = value;

      return this;
    },
    validateInput(key) {
      if (this[key].required) {
        return 'The value is required.';
      } else if (this[key].required) {
        return validate(this[key].type);
      }
    },
  })
};

export default Form;
