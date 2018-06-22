import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

import SingleLineGridList from 'components/SingleLineGridList';

const drawerWidth = 240;

const styles = (theme) => ({
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  },
  appBar: {
    // position: 'fixed',
    background: 'white',
    color: 'black',
    '@media print': {
      position: 'absolute'
    },
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    // width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  'appBarShift-left': {
    marginLeft: drawerWidth
  },
  hide: {
    display: 'none'
  },
  search: {
    // color: 'white',
    float: 'right',
    width: 'calc(100% - 100px)'
  },
  searchShift: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },

  hashTagShortCutBar: {
    // height: 70
  }
});

function SearchAppBar(props) {
  const { classes, open, anchor, handleDrawer } = props;
  return (
    <AppBar
      className={classNames(classes.appBar, {
        [classes.appBarShift]: open,
        [classes[`appBarShift-${anchor}`]]: open
      })}
    >
      <Toolbar disableGutters>
        <IconButton
          // className={classNames(classes.menuButton, open && classes.hide)}
          className={classNames(classes.menuButton, open)}
          color="inherit"
          aria-label="Menu"
          onClick={handleDrawer}
        >
          <MenuIcon />
        </IconButton>
        {/*<Typography variant="title" color="inherit" className={classes.flex}>*/}
        {/*Title*/}
        {/*</Typography>*/}
        <Input
          id={'appbar-input'}
          className={classNames(classes.search, {
            [classes.searchShift]: open
          })}
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
          type="search"
          placeholder="Hello world"
        />
      </Toolbar>
      {/*<Toolbar*/}
        {/*disableGutters*/}
        {/*className={classNames(classes.hashTagShortCutBar, {})}*/}
      {/*>*/}
        {/*<SingleLineGridList cols={4.5} />*/}
      {/*</Toolbar>*/}
    </AppBar>
  );
}

SearchAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  anchor: PropTypes.string.isRequired,
  handleDrawer: PropTypes.func.isRequired
};

export default withStyles(styles, { withTheme: true })(SearchAppBar);
