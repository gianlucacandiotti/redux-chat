import * as t from './actionTypes';

export const setValue = (id, value) => ({
  type: t.SET_VALUE,
  payload: {
    id,
    value,
  },
});

export const validateValue = (id) => ({
  type: t.VALIDATE_VALUE,
  payload: {
    id,
  },
});
