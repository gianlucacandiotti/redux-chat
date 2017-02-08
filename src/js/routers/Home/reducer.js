import { Map } from 'immutable';
import { combineReducers } from 'redux-immutablejs';
import { reducer as formReducer } from 'redux-form/immutable';

export default combineReducers(Map({
  form: formReducer
}));
