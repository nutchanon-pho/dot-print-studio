import { fromJS } from 'immutable';
import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from './constants';


export function login() {
  return {
    type: LOGIN_SUCCESS,
    user: fromJS({
      firstName: 'Nutchanon',
      lastName: 'Pho-ngoen',
    }),
  };
}

export function logout() {
  return {
    type: LOGOUT_SUCCESS,
  };
}
