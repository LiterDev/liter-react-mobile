/*
 * UserReducer
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

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: null,
  data: {
    accessToken: '',
    refreshToken: '',
    username: '',
    user: {}
  }
});

function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return state
        .set('loading', true)
        .set('error', false)
        .set('data', null);
    case LOGIN_SUCCESS:
      return state
        .set('loading', false)
        .set('error', false)
        .set('data', action.data);
    case LOGIN_ERROR:
      return state.set('error', action.error).set('loading', false);

    case VALIDATE_REQUEST:
      return state
        .set('loading', true)
        .set('error', false)
        .set('data', null);
    case VALIDATE_SUCCESS:
      return state
        .set('data', action.data)
        .set('loading', false)
        .set('error', false);
    case VALIDATE_ERROR:
      return state.set('error', action.error).set('loading', false);

    case AUTH_USER_INFO_REQUEST:
      console.log('---- AUTH_USER_INFO_REQUEST', action.data)
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['data', 'user'], {});
    case AUTH_USER_INFO_SUCCESS:
      console.log('AUTH_USER_INFO_SUCCESS', action.data)
      return state
        .setIn(['data', 'user'], action.data)
        .set('loading', false)
        .set('error', false);
    case AUTH_USER_INFO_ERROR:
      return state.set('error', action.error).set('loading', false);

    case AUTH_GET_ACC_TOKEN_REQUEST:
      return state
        .set('loading', true)
        .set('error', false)
        // .set('data', null);
    case AUTH_GET_ACC_TOKEN_SUCCESS:
      return state
        .set('data', action.data)
        .set('loading', false)
        .set('error', false);
    case AUTH_GET_ACC_TOKEN_ERROR:
      return state.set('error', action.error).set('loading', false);

    default:
      return state;
  }
}

export default authReducer;
