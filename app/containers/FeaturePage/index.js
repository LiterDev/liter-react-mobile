import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectAuth, makeSelectAccessToken } from 'containers/Auth/selectors';
import FeaturePage from './FeaturePage';

const mapStateToProps = createStructuredSelector({
  auth: makeSelectAuth(),
});
const mapDispatchToProps = (dispatch) => ({});
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);


export default compose(withConnect)(FeaturePage);
export { mapDispatchToProps };
