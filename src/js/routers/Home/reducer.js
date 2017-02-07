import { Map } from 'immutable';
import { combineReducers } from 'redux-immutablejs';
import { reducer as formReducer } from 'redux-form';

export default combineReducers(Map({
  form: formReducer
}));
