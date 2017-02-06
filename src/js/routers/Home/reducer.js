import { Map } from 'immutable';
import { combineReducers } from 'redux-immutablejs';
import {fromJS} from 'immutable';
import { reducer as formReducer } from 'redux-form';

export default combineReducers(Map({
  form: formReducer
}));
