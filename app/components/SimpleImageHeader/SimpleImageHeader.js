import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import LoginForm from 'components/LoginForm';
import Banner from './images/banner.jpg';

import { Link } from 'react-router-dom';

const styles = (theme) => ({
  banner: {
    width: '100%'
  }
})

class SimpleImageHeader extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    const { image, subText, classes } = this.props;
    // console.log(this.props);
    return (
      <header>
        <a >
          <img className={classes.banner} src={Banner} alt={`LITER - 세상 모든 리뷰를 경험해보세요`} />
        </a>
        <div>
          <span>세상 모든 리뷰를 경험해보세요</span>
        </div>
      </header>
    );
  }
}
SimpleImageHeader.propTypes = {
  classes: PropTypes.object,
  image: PropTypes.string,
  subText: PropTypes.string
};

export default withStyles(styles)(SimpleImageHeader);
