/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  AUTH,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  VALIDATE_REQUEST,
  VALIDATE_SUCCESS,
  VALIDATE_ERROR,
  AUTH_USER_INFO_REQUEST,
  AUTH_USER_INFO_SUCCESS,
  AUTH_USER_INFO_ERROR,
  AUTH_GET_ACC_TOKEN_REQUEST,
  AUTH_GET_ACC_TOKEN_SUCCESS,
  AUTH_GET_ACC_TOKEN_ERROR
} from './constants';

export function getAuth() {
  return {
    type: AUTH
  };
}
export function loadAuth(username, password) {
  return {
    type: LOGIN_REQUEST,
    username,
    password
  };
}
export function authLoaded(data) {
  return {
    type: LOGIN_SUCCESS,
    data
  };
}

export function authLoadingError(error, message) {
  return {
    type: LOGIN_ERROR,
    error,
    message
  };
}

export function loadAuthUserInfo(auth) {
  console.log(' *** loadAuthUserInfo', auth)
  return {
    type: AUTH_USER_INFO_REQUEST,
    auth
  };
}
export function authUserInfoLoaded(data) {
  return {
    type: AUTH_USER_INFO_SUCCESS,
    data
  };
}

export function authUserInfoLoadingError(error, message) {
  return {
    type: AUTH_USER_INFO_ERROR,
    error,
    message
  };
}

export function loadAccessToken() {
  return {
    type: AUTH_GET_ACC_TOKEN_REQUEST
  };
}
export function accessTokenLoaded(data) {
  return {
    type: AUTH_GET_ACC_TOKEN_SUCCESS,
    data
  };
}

export function accessTokenLoadingError(error, message) {
  return {
    type: AUTH_GET_ACC_TOKEN_ERROR,
    error,
    message
  };
}

export function loadValidateAuth(token) {
  return {
    type: VALIDATE_REQUEST,
    token
  };
}

export function loadedValidateAuth(token) {
  return {
    type: VALIDATE_SUCCESS,
    token
  };
}

export function errorLoadValidateAuth(error) {
  return {
    type: VALIDATE_ERROR,
    error
  };
}
