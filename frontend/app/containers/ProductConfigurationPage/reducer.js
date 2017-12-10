/*
 *
 * ProductConfigurationPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  UPDATE_FORM,
} from './constants';

const initialState = fromJS({
});

function productConfigurationPageReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case UPDATE_FORM:
      return state.set('form', action.form);
    default:
      return state;
  }
}

export default productConfigurationPageReducer;
