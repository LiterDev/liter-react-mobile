import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import {
  makeSelectAuth,
  makeSelectAccessToken
} from 'containers/Auth/selectors';
import { loadAccessToken } from 'containers/Auth/actions';
import { createStructuredSelector } from 'reselect';
import App from './App';
import authSaga from '../Auth/saga';
import injectSaga from '../../utils/injectSaga';

const mapDispatchToProps = (dispatch) => ({
  onAutoLogin: (refreshToken) => {
    console.log('refreshToken', refreshToken);
    dispatch(loadAccessToken());
  }
});

const mapStateToProps = createStructuredSelector({
  auth: makeSelectAuth(),
  accessToken: makeSelectAccessToken()
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withSaga = injectSaga({ key: 'auth', saga: authSaga });

export default withRouter(
  compose(
    withConnect,
    withSaga
  )(App)
);
export { mapDispatchToProps };
