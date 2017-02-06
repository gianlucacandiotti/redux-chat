import validator from 'validator';
import * as t from './actionTypes';

const setValue = (state, { id, value }) => (
  state.updateIn(['inputs', 'byId', id, 'value'], v => value)
);

const validateValue = (state, { id }) => {
  const value = state.getIn(['inputs', 'byId', id, 'value']);
  const type = state.getIn(['inputs', 'byId', id, 'type']);

  switch (type) {
    case 'email':
      if (!validator.isEmail(value)) {
        return state.updateIn(
          ['inputs', 'byId', id, 'errorType'],
          '',
          v => 'emailInvalid'
        );
      }

      return state;
    case 'password':
      if (!validator.isLength(value, { min: 6 })) {
        return state.updateIn(
          ['inputs', 'byId', id, 'errorType'],
          '',
          v => 'passwordTooShort'
        );
      }

      if (!validator.isLength(value, { max: 16 })) {
        return state.updateIn(
          ['inputs', 'byId', id, 'errorType'],
          '',
          v => 'passwordTooLong'
        );
      }

      if (validator.matches(value, /^[a-z]+$/g)) {
        return state.updateIn(
          ['inputs', 'byId', id, 'errorType'],
          '',
          v => 'passwordSecurityWeak'
        );
      }

      if (validator.matches(value, /^[a-zA-Z0-9]+$/g)) {
        return state.updateIn(
          ['inputs', 'byId', id, 'errorType'],
          '',
          v => 'passwordSecurityMedium'
        );
      }

      return state;
    default:
      return state;
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case t.SET_VALUE:
      return setValue(state, action.payload);
    case t.VALIDATE_VALUE:
      return validateValue(state, action.payload);
    default:
      return state;
  }
};
