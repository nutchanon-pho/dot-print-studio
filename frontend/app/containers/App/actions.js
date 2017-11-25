import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILED, LOGOUT_SUCCESS } from './constants';


export function login() {
  return {
    type: LOGIN_REQUEST,
  };
}

export function loginSuccess({ data }) {
  return {
    type: LOGIN_SUCCESS,
    user: data,
  };
}

export function loginFailed(error) {
  return {
    type: LOGIN_FAILED,
    error,
  };
}

export function logout() {
  return {
    type: LOGOUT_SUCCESS,
  };
}
