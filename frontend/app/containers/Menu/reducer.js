import { fromJS } from 'immutable';

import {
  SELECT_MENU,
} from './constants';

const initialState = fromJS({
  activeMenu: '',
});

function menuReducer(state = initialState, { type, name }) {
  switch (type) {
    case SELECT_MENU:
      return state.set('activeMenu', name);
    default:
      return state;
  }
}

export default menuReducer;
