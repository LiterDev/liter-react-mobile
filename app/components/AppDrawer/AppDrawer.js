import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Drawer from '@material-ui/core/Drawer';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Hidden from '@material-ui/core/Hidden';

import IconButton from '@material-ui/core/IconButton';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import DrawerMenu from 'components/DrawerMenu';

import { withStyles } from '@material-ui/core/styles';

// const drawerWidth = 240;

const styles = (theme) => ({
  root: {
    // [theme.breakpoints.up('lg')]: {
    //   width: 250
    // }
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar
  }
});
class AppDrawer extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    // const { anchor, open } = this.props;
    const { theme, classes, anchor, open, handleDrawer } = this.props;
    return (
      <div className={classes.root}>
        {/*<Hidden>*/}
        {/*disableBackdropTransition={!iOS}*/}
        <SwipeableDrawer
          classes={{
            paper: classNames(classes.paper, 'algolia-drawer')
          }}
          variant="temporary"
          open={open}
          onOpen={handleDrawer}
          onClose={handleDrawer}
          ModalProps={{
            keepMounted: true
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawer}>
              {theme.direction === 'rtl' ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </div>
          <DrawerMenu {...this.props} />
        </SwipeableDrawer>
        {/*</Hidden>*/}
      </div>
    );
  }
}
AppDrawer.propTypes = {
  theme: PropTypes.object,
  classes: PropTypes.object,
  anchor: PropTypes.string,
  open: PropTypes.bool,
  handleDrawer: PropTypes.func,
  auth: PropTypes.object,
  accessToken: PropTypes.string
};

export default withStyles(styles, { withTheme: true })(AppDrawer);
