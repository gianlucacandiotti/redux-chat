import { createSelector } from 'reselect';
import { fromJS } from 'immutable';
import { NAME } from './constants';

export const allInputsSelector = state => state.getIn([NAME, 'inputs', 'byId']);

export const inputSelector = createSelector(
  allInputsSelector,
  (inputs, id) => inputs.getIn(id).toJS()
);

const exampleState = fromJS({
  forms: {
    inputs: {
      byId: {
        email: {
          id: 'email',
          name: 'email',
          type: 'email',
          value: '',
          required: true,
        },
      },
      allIds: [
        'email',
      ],
    },
  },
});

console.log(inputSelector(exampleState, 'email'));
