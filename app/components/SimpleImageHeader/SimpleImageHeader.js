import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Banner from './images/literLogo@2x.png';
// import Logo from 'images/literLogo@2x.png';

const styles = (theme) => ({
  container: {
    paddingTop: theme.spacing.unit * 4,
    paddingBottom: theme.spacing.unit * 4,
    textAlign: 'center'
  },
  banner: {
    width: 130,
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2
  }
});

class SimpleImageHeader extends React.PureComponent {
  render() {
    const { classes } = this.props;
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
};

export default withStyles(styles)(SimpleImageHeader);
