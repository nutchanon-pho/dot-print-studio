/*
 * AppReducer
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
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  LOGIN_FAILED,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  currentUser: null,
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return state
        .set('currentUser', fromJS(action.user));
    case LOGIN_FAILED:
      return state
          .set('loginError', action.error);
    case LOGOUT_SUCCESS:
      return state
          .set('currentUser', null);
    default:
      return state;
  }
}

export default appReducer;
