import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
// import injectSaga from 'utils/injectSaga';

// import withFullSizeModal from 'components/Modals/FullSizeModal';
import withClosePageWrapper from 'components/PageWrappers/withClosePageWrapper';
import ReviewDetail from './ReviewDetail';

// const withModalReviewDetail = withFullSizeModal('login')(ReviewDetail);
const withPageWrapperReviewDetail = withClosePageWrapper()(ReviewDetail);

// export default compose()(withModalReviewDetail);
// export default compose()(ReviewDetail);
// export default ReviewDetail;
// export default withModalReviewDetail;
export default withPageWrapperReviewDetail;

// export default withFullSizeModal;
