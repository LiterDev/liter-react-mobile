/*
 * FeaturePage
 *
 * List all the features
 */
import axios from 'axios';
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import classNames from 'classnames';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import Modal from 'react-modal';

import SimpleImageHeader from 'components/SimpleImageHeader';
import LoginForm from 'components/LoginForm';
import './style.scss';
import gray from '@material-ui/core/colors/grey';

const styles = (theme) => ({
  componentWrapper: {
    backgroundColor: 'white',
    height: '100%',
    paddingRight: theme.spacing.unit * 4,
    paddingLeft: theme.spacing.unit * 4
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '100%'
  },
  menu: {
    width: 200
  },
  helpMenu: {
    display: 'flex',
    justifyContent: 'space-between'
  }
});

class Login extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { auth, token, loading, history } = this.props;
    const id = _.get(auth, 'user.id');
    const prevLoading = prevProps.loading;
    // console.log('===================componentDidUpdate==============');
    if (prevLoading && !loading && token && id) {
      // console.log(this.props);
      history.push('/');
    }
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    // console.log('===================getSnapshotBeforeUpdate==============');
    // console.log('prevProps.loading', _.get(prevProps, 'loading'));
    // console.log('props.loading', _.get(this.props, 'loading'));
  }

  handleChange = (name) => (event) => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    const { classes, history, location, auth } = this.props;
    const token = (auth && auth.token) || '';

    const pathname = this.props.location.pathname.replace(/\//gi, '');
    const handleModal = () => {
      return RegExp('login|sign_in|find_password').test(pathname);
    };

    {
      {
        /*<form onSubmit={this.uploadHandler}>*/
      }
      {
        /*<input type="file" onChange={this.fileChangedHandler} />*/
      }
      {
        /*<button type="button" onClick={this.uploadHandler}>*/
      }
      {
        /*Upload!*/
      }
      {
        /*</button>*/
      }
      {
        /*</form>*/
      }
      /*<div className={classNames(classes.componentWrapper)}>*/
    }
    return (
      <div className={classNames(classes.componentWrapper)}>
        <Helmet titleTemplate="%s - Login" defaultTitle="title">
          <meta name="description" content="LoginPage" />
        </Helmet>
        <SimpleImageHeader />

        <LoginForm pathname={pathname} {...this.props} />
      </div>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  onSubmitLogin: PropTypes.func,
  user: PropTypes.object,
  token: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool])
};

export default withStyles(styles)(Login);
