/**
 *
 * Main
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { withStyles } from '@material-ui/core';
import { Switch, Route, withRouter } from 'react-router-dom';

// import Avatar from '@material-ui/core/Avatar';
import ReviewThumbnailCard from 'components/ReviewThumbnailCard';
import root from '../../utils/rootSaga';

const styles = (theme) => ({
  MainWrapper: {
    marginTop: 160,
  },
});

class ReviewList extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.MainWrapper}>
        {/* SEO HELMET */}
        <Helmet titleTemplate="main Page" defaultTitle="main Page">
          <meta
            name="description"
            content="A React.js Boilerplate application"
          />
        </Helmet>
        <div className={classes.listWrapper}>
        {[1,2,3,4,5,6,7,9,10].map((v, index) => <ReviewThumbnailCard key={index} reviewId={index}/>)}
        </div>
      </div>
    );
  }
}

ReviewList.propTypes = {
  classes: PropTypes.object,
  auth: PropTypes.object
};

export default withStyles(styles)(ReviewList);
