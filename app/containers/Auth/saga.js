/**
 * Gets the repositories of the user from Github
 */
import {
  call,
  put,
  select,
  take,
  takeLatest,
  takeEvery
} from 'redux-saga/effects';
import request from 'utils/requestAxios';
import { fromJS, isImmutable } from 'immutable';
import history from 'history';

import {
  LOGIN_REQUEST,
  LOGOUT_SUCCESS,
  VALIDATE_REQUEST,
  AUTH_USER_INFO_REQUEST,
  AUTH_GET_ACC_TOKEN_REQUEST
} from './constants';
import {
  authLoaded,
  authLoadingError,
  loadedValidateAuth,
  errorLoadValidateAuth,
  loadAuthUserInfo,
  authUserInfoLoaded,
  authUserInfoLoadingError,
  accessTokenLoaded,
  accessTokenLoadingError
} from './actions';
import { makeSelectAuth } from './selectors';

/**
 * Github repos request/response handler
 */

export function* setAuth({ username, password }) {
  const requestURL = '/auth/signin';
  const options = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: JSON.stringify({ username, password })
  };

  try {
    const response = yield call(request, requestURL, options);
    const data = response.data;
    // const accessToken = _.get(data, 'accessToken', '');
    // const refreshToken = _.get(data, 'refreshToken', '');
    yield put(authLoaded(fromJS(data)));
    yield put(loadAuthUserInfo(data));
  } catch (error) {
    let message;
    switch (error.status) {
      case 500:
        message = 'Internal Server Error';
        break;
      case 401:
        message = 'Invalid credentials';
        break;
      default:
        message = 'Something went wrong';
    }

    yield put(authLoadingError(error, message));
  }
}

export function* getAuthUserInfo(auth) {
  // console.log('@@@getAuthUserInfo', token);
  const accessToken = _.get(auth, 'auth.accessToken', '');
  const refreshToken = _.get(auth, 'auth.refreshToken', '');
  const requestURL = '/user/authInfo';
  const options = {
    withAuth: true
  };

  try {
    const response = yield call(request, requestURL, options);
    const { data } = response;
    console.log('@@@@@@@@@@@@', data);

    yield put(authUserInfoLoaded(data));

    history.push('/');
    localStorage.setItem('access_token', accessToken);
    localStorage.setItem('refresh_token', refreshToken);
  } catch (error) {
    let message;
    switch (error.status) {
      case 500:
        message = 'Internal Server Error';
        break;
      case 401:
        message = 'Invalid credentials';
        break;
      default:
        message = 'Something went wrong';
    }

    yield put(authUserInfoLoadingError(error, message));

    localStorage.removeItem('refresh_token');
  }
}

export function* getAccessToken() {
  const requestURL = '/auth/claimAccessToken';
  const options = {
    method: 'post',
    withAuth: false,
    withRefreshToken: true
  };

  try {
    const response = yield call(request, requestURL, options);
    const { data } = response;
    // data.refreshToken = localStorage.getItem('refresh_token');
    console.log('@@@@@@@@@@@@', data);

    yield put(accessTokenLoaded(fromJS(data)));
    yield put(getAuthUserInfo({ auth: data }));
    // history.push('/');
    // localStorage.setItem('access_token', accessToken);
    // localStorage.setItem('refresh_token', refreshToken);
  } catch (error) {
    let message;
    switch (error.status) {
      case 500:
        message = 'Internal Server Error';
        break;
      case 401:
        message = 'Invalid credentials';
        break;
      default:
        message = 'Something went wrong';
    }

    yield put(accessTokenLoadingError(error, message));
    // localStorage.removeItem('refresh_token');
  }
}
/**
 * Root saga manages watcher lifecycle
 */
export default function* authData() {
  // yield takeLatest(VALIDATE_REQUEST, getValidate);
  yield takeLatest(AUTH_GET_ACC_TOKEN_REQUEST, getAccessToken);
  yield takeLatest(AUTH_USER_INFO_REQUEST, getAuthUserInfo);
  yield takeLatest(LOGIN_REQUEST, setAuth);
}
