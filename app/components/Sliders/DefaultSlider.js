import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';

import Slider from 'react-slick';

const styles = (theme) => ({
  root: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 4,
    width: '100%'
  }
});

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false
};

class DefaultSlider extends React.Component {
  render() {
    const { items = [], classes } = this.props;

    const renderSlide = (_items) =>
      _items.map((item, index) => {
        const {
          imageUrl = '',
          title = '',
          content = '',
          youtubeId = ''
        } = item;

        const multiMedia = youtubeId ? (
          <iframe
            // width="560"
            // height="315"
            src={`https://www.youtube.com/embed/${youtubeId}`}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        ) : (
          <img src={imageUrl} style={{ height: '100%', margin: 'auto' }} />
        );
        return (
          <div key={imageUrl + title + content}>
            <div style={{ width: 'auto', height: '200px' }}>{multiMedia}</div>
            {/*<h3>{index}</h3>*/}
          </div>
        );
      });
    return (
      <div className={classes.root}>
        <Slider {...settings}>{renderSlide(items)}</Slider>
      </div>
    );
  }
}

DefaultSlider.propTypes = {
  classes: PropTypes.object.isRequired,
  reviewId: PropTypes.number
};

export default withStyles(styles)(DefaultSlider);
