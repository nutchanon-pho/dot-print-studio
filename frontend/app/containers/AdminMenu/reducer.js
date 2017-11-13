/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable';

import {
  SELECT_ADMIN_MENU,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  activeAdminMenu: '',
});

function adminMenuReducer(state = initialState, { type, name }) {
  switch (type) {
    case SELECT_ADMIN_MENU:
      return state.set('activeAdminMenu', name);
    default:
      return state;
  }
}

export default adminMenuReducer;
