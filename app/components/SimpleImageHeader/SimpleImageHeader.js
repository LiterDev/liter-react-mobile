import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Banner from './images/literLogo@2x.png';
// import Logo from 'images/literLogo@2x.png';

const styles = (theme) => ({
  container: {
    marginTop: theme.spacing.unit * 4,
    marginBottom: theme.spacing.unit * 4,
    textAlign: 'center'
  },
  banner: {
    width: 130,
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2
  }
});

class SimpleImageHeader extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    const { image, subText, classes } = this.props;
    // console.log(this.props);
    return (
      <div className={classes.container}>
        <div>
          <img
            className={classes.banner}
            src={Banner}
            alt={`LITER - 세상 모든 리뷰를 경험해보세요`}
          />
        </div>
        <div>
          <Typography variant="subheading" align="center">
            세상 모든 리뷰를 경험해보세요
          </Typography>
        </div>
      </div>
    );
  }
}
SimpleImageHeader.propTypes = {
  classes: PropTypes.object,
  image: PropTypes.string,
  subText: PropTypes.string
};

export default withStyles(styles)(SimpleImageHeader);
