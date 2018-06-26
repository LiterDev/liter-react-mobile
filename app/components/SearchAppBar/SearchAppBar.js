import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

import SingleLineGridList from 'components/SingleLineGridList';

const drawerWidth = 240;

const styles = (theme) => ({
  menuButton: {
    marginLeft: 12,
    marginRight: theme.spacing.unit,
    width: theme.spacing.unit * 6.5,
    height: theme.spacing.unit * 5.5,
    boxShadow: `2px 2px 3px ${theme.palette.border.default}`,
    border: `1px solid ${theme.palette.gray[300]}`,
    color: theme.palette.gray[500],
    borderRadius: 4
  },
  appBar: {
    paddingTop: 4,
    background: 'white',
    color: 'black',
    '@media print': {
      position: 'absolute'
    },
    boxShadow: 'none',
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
    backgroundColor: theme.palette.gray[300],
    borderRadius: theme.spacing.unit / 2,
    height: theme.spacing.unit * 5.5,
    float: 'right',
    width: 'calc(100% - 84px)',
    color: theme.palette.gray[500],

    '::-webkit-input-placeholder': {
      color: theme.palette.gray[900],
    },
    '& > *': {
      margin: 'auto'
    },
    '& > :first-child': {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit
    },
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
          placeholder="검색"
          disableUnderline
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
