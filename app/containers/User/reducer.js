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
  LOAD_USER,
  LOAD_USER_SUCCESS,
  LOAD_USER_ERROR
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  data: {},
});

function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_USER:
      return state
        .set('loading', true)
        .set('error', false)
        .set('data', {});
    case LOAD_USER_SUCCESS:
      return state
        .set('data', action.data)
        .set('loading', false)
        .set('error', false);
    case LOAD_USER_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default userReducer;
