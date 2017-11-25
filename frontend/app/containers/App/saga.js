/**
 * Gets the repositories of the user from Github
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { loginSuccess, loginFailed } from 'containers/App/actions';
import { LOGIN_REQUEST } from './constants';
/**
 * Github repos request/response handler
 */
export function* login() {
  const requestURL = 'https://private-72bf6-dotprint.apiary-mock.com/auth/login';
  const requestBody = {
    email: 'test',
    password: 'test',
  };
  const requestConfig = {
    responseType: 'json',
  };

  try {
    const loginResult = yield call(axios.post, requestURL, requestBody, requestConfig);
    yield put(loginSuccess(loginResult));
  } catch (err) {
    yield put(loginFailed(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* root() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOGIN_REQUEST, login);
}
