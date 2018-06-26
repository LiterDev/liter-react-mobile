/**
 *
 * Main
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { withStyles } from '@material-ui/core';

import CreateIcon from '@material-ui/icons/Create';
import Button from '@material-ui/core/Button';
import Slide from '@material-ui/core/Slide';

import ReviewThumbnailCard from 'components/ReviewThumbnailCard';

const styles = (theme) => ({
  MainWrapper: {
    marginTop: 70
  },
  fab: {
    position: 'fixed',
    bottom: theme.spacing.unit,
    right: theme.spacing.unit
  }
});

class ReviewList extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      showCreateReviewButton: true
    };
    this.handleShowCreateReviewButton = _
      .debounce(_.throttle(this.handleShowCreateReviewButton, 1000))
      .bind(this);
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleShowCreateReviewButton);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleShowCreateReviewButton);
  }

  handleShowCreateReviewButton(e) {
    console.log('handleShowCreateReviewButton');
    const currentScrollY = window.scrollY;
    const { previousScrollY } = this.state;
    this.setState({
      showCreateReviewButton: currentScrollY < previousScrollY,
      previousScrollY: window.scrollY
    });
  }
  render() {
    const { showCreateReviewButton } = this.state;
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
        <span id="scrollIndicator" />
        <div>
          {[1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50].map((v, index) => (
            <ReviewThumbnailCard key={index} reviewId={index} />
          ))}
        </div>
        <Slide direction="up" in={showCreateReviewButton}>
          <Button
            id={'createReview'}
            className={classes.fab}
            color="primary"
            variant="fab"
          >
            <CreateIcon />
          </Button>
        </Slide>
      </div>
    );
  }
}

ReviewList.propTypes = {
  classes: PropTypes.object,
  auth: PropTypes.object
};

export default withStyles(styles)(ReviewList);
