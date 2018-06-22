/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectUser = (state) => state.get('user');

const makeSelectUser = () => createSelector(
  selectUser,
  (userState) => userState.get('data')
);

const makeSelectUserLoading = () => createSelector(
  selectUser,
  (globalState) => globalState.get('loading')
);

const makeSelectUserError = () => createSelector(
  selectUser,
  (globalState) => globalState.get('error')
);

export {
  selectUser,
  makeSelectUser,
  makeSelectUserLoading,
  makeSelectUserError,
};
