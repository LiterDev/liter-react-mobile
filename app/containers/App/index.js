import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { makeSelectAuth,
  makeSelectAccessToken
} from 'containers/Auth/selectors';
import { loadValidateAuth, loadAccessToken } from 'containers/Auth/actions';
import { createStructuredSelector } from 'reselect';
import App from './App';

const mapDispatchToProps = (dispatch) => ({
  onCheckValidate: (token) => {
    // if (evt !== undefined && evt.preventDefault) evt.preventDefault();
    console.log('App.index', token);
    dispatch(loadValidateAuth(token));
  },
  onAutoLogin: (refreshToken) => {
    console.log('refreshToken', refreshToken);
    dispatch(loadAccessToken(refreshToken));
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

export default withRouter(compose(withConnect)(App));
export { mapDispatchToProps };
