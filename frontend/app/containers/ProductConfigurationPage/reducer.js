/*
 *
 * ProductConfigurationPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  UPDATE_FORM,
  USE_IMAGE,
} from './constants';

const initialState = fromJS({
});

function productConfigurationPageReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case UPDATE_FORM:
      return state.set('form', action.form);
    case USE_IMAGE:
      return state.set('usedImage', action.image);
    default:
      return state;
  }
}

export default productConfigurationPageReducer;
