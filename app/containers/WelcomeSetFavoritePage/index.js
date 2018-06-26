import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import injectSaga from 'utils/injectSaga';

import authSaga from 'containers/Auth/saga';

import {
  makeSelectAuth,
  makeSelectAccessToken,
  makeSelectAuthLoading,
  makeSelectAuthError
} from 'containers/Auth/selectors';

import { loadAuth } from 'containers/Auth/actions';

import withClosePageWrapper from 'components/PageWrappers/withClosePageWrapper';
import WelcomeSetFavorite from './WelcomeSetFavorite';

const mapDispatchToProps = (dispatch) => ({
  onSubmitLogin: (username, password) => {
    dispatch(loadAuth(username, password));
  }
});

const mapStateToProps = createStructuredSelector({
  auth: makeSelectAuth(),
  token: makeSelectAccessToken(),
  loading: makeSelectAuthLoading(),
  error: makeSelectAuthError()
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);
// const withReducer = injectReducer({ key: 'user', userReducer });
// const withSaga = injectSaga({ key: 'auth', saga: authSaga });

export default withRouter(compose(
  withConnect,
  // withSaga
)(WelcomeSetFavorite));
export { mapDispatchToProps };
