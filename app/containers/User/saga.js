/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';

import { LOAD_USER } from './constants';
import { userLoaded, userLoadingError } from './actions';
import { makeSelectUser } from './selectors';

/**
 * Github repos request/response handler
 */
export function* getUser() {
  // Select username from store
  const user = yield select(makeSelectUser());
  const requestURL = `https://api.github.com/users/aa/repos?type=all&sort=updated`;

  try {
    // Call our request helper (see 'utils/request')
    const repos = yield call(request, requestURL);
    yield put(userLoaded(repos, user));
  } catch (err) {
    yield put(userLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* userData() {
  yield takeLatest(LOAD_USER, getUser);
}
