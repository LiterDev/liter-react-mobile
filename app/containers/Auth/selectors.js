/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectAuth = (state) => state.get('auth');

const makeSelectAuth = () =>
  createSelector(
    selectAuth,
    (authState) => authState.get('data') && authState.get('data').toJS()
  );

const makeSelectAccessToken = () =>
  createSelector(selectAuth, (authState) =>
    authState.getIn(['data', 'accessToken'])
  );

const makeSelectRefreshToken = () =>
  createSelector(selectAuth, (authState) =>
    authState.getIn(['data', 'refreshToken'])
  );

const makeSelectAuthLoading = () =>
  createSelector(selectAuth, (authState) => authState.get('loading'));

const makeSelectAuthError = () =>
  createSelector(selectAuth, (authState) => authState.get('error'));

export {
  selectAuth,
  makeSelectAuth,
  makeSelectAccessToken,
  makeSelectRefreshToken,
  makeSelectAuthLoading,
  makeSelectAuthError
};
