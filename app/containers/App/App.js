/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { Route, Switch, Link, Redirect, withRouter } from 'react-router-dom';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

import FeaturePage from 'containers/FeaturePage/Loadable';
import HomePage from 'containers/HomePage';
import ReviewListPage from 'containers/ReviewListPage';
import ReviewDetailPage from 'containers/ReviewDetailPage';
import LoginPage from 'containers/LoginPage';
import WelcomeSetFavoritePage from 'containers/WelcomeSetFavoritePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage';

import Header from 'components/Header';
import Footer from 'components/Footers/index';
import AppBar from 'components/SearchAppBar';
import Drawer from 'components/AppDrawer';

import MaterialModal from 'components/Modals/MaterialModal';

const styles = (theme) => ({
  root: {
    // flexGrow: 1,
    // // height: 430,
    zIndex: 1,
    // overflow: 'hidden',
    // position: 'relative',
    // display: 'flex',
    // width: '100%',

    display: 'flex',
    alignItems: 'stretch',
    minHeight: '100vh',
    width: '100%'
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    // padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  'contentShift-left': {
    marginLeft: 0
  },
  'contentShift-right': {
    marginRight: 0
  }
});
const appBarBlackList = ['/login', '/review/', '/welcome_set_favorite'];
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      anchor: 'left'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleDrawer = this.handleDrawer.bind(this);
    this.handleAppBarHidden = this.handleAppBarHidden.bind(this);
  }

  componentDidMount() {
    // const accessToken = localStorage.getItem('access_token');
    const refreshToken = localStorage.getItem('refresh_token');
    if (refreshToken) {
      console.log('App componentDidMount ::: ');
      this.props.onAutoLogin(refreshToken);
    }
  }

  handleChange = (name) => (event) => {
    this.setState({
      [name]: event.target.value
    });
  };
  handleDrawer = () => {
    this.setState({ open: !this.state.open });
  };
  handleAppBarHidden = () => {
    for (let i = 0; i < appBarBlackList.length; i++) {
      if ((this.props.location.pathname || '').includes(appBarBlackList[i])) {
        return true;
      }
    }
    return false;
  };

  render() {
    const { classes, auth, accessToken } = this.props;
    const { open, anchor } = this.state;
    console.log('this.handleAppBarHidden()', this.handleAppBarHidden())
    const controlledOpen = this.handleAppBarHidden() ? false : open;
    return (
      <div className={classes.root}>
        <Helmet
          titleTemplate="%s - React.js Boilerplate"
          defaultTitle="React.js Boilerplate"
        >
          <meta
            name="description"
            content="A React.js Boilerplate application"
          />
        </Helmet>
        {/* https://stackoverflow.com/questions/40541994/multiple-path-names-for-a-same-component-in-react-router?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa */}

        <div hidden={this.handleAppBarHidden()}>
          <AppBar
            open={controlledOpen}
            anchor={anchor}
            handleDrawer={this.handleDrawer}
          />
          <Drawer
            open={controlledOpen}
            anchor={anchor}
            handleDrawer={this.handleDrawer}
            auth={auth}
            accessToken={accessToken}
          />
        </div>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open,
            [classes[`contentShift-${anchor}`]]: open
          })}
        >
          <Switch>
            <Route exact path="/" component={ReviewListPage} />
            <Route path="/review/:reviewId" component={ReviewDetailPage} />
            <Route
              path="/(login|sign_in|find_password)/"
              component={LoginPage}
            />
            <Route path="/welcome_set_favorite" component={WelcomeSetFavoritePage} />
            <Route path="" component={NotFoundPage} />
          </Switch>
          <div hidden={this.handleAppBarHidden()}>
            <Footer />
          </div>
        </main>
      </div>
    );
  }
}
App.propTypes = {
  classes: PropTypes.object.isRequired,
  onCheckValidate: PropTypes.func,
  onAutoLogin: PropTypes.func,
  auth: PropTypes.object,
  accessToken: PropTypes.string
};

export default withStyles(styles)(App);
