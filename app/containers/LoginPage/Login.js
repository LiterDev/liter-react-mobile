/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';

import axios from 'axios';

import { Helmet } from 'react-helmet';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import Modal from 'react-modal';

import SimpleImageHeader from 'components/SimpleImageHeader';
import LoginForm from 'components/LoginForm';
import './style.scss';

const styles = (theme) => ({
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
    this.state = {
      id: '',
      password: '',
      passwordConfirm: '',
      mail: '',

      selectedFile: null
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (name) => (event) => {
    this.setState({
      [name]: event.target.value
    });
  };

  fileChangedHandler = (event) => {
    this.setState({ selectedFile: event.target.files[0] }, () => {
      console.log(this.state);
    });
  };

  uploadHandler = () => {
    // console.log(this.state.selectedFile);
    const formData = new FormData();
    console.log('this.state.selectedFile', this.state.selectedFile);
    formData.append(
      'img',
      this.state.selectedFile,
      this.state.selectedFile.name
    );
    formData.append(
      'img1',
      this.state.selectedFile,
      this.state.selectedFile.name
    );
    // axios.post('http://localhost:2017/up', formData);
    axios.post('http://192.168.1.81:8080/sample/file', formData);
  };

  render() {
    const { classes, history, location, auth } = this.props;
    const token = (auth && auth.token) || '';

    const pathname = this.props.location.pathname.replace(/\//gi, '');
    const handleModal = () => {
      return RegExp('login|sign_in|find_password').test(pathname);
    };

    console.log(this.props);
    // if (token) {
    //   return <Redirect to="/" />;
    // }

    return (
      <div>
        <Helmet titleTemplate="%s - Login" defaultTitle="title">
          <meta name="description" content="LoginPage" />
        </Helmet>
        <SimpleImageHeader />
        {/*<form onSubmit={this.uploadHandler}>*/}
        <input type="file" onChange={this.fileChangedHandler} />
        <button type="button" onClick={this.uploadHandler}>
          Upload!
        </button>
        {/*</form>*/}
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
  id: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  token: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool])
};

export default withStyles(styles)(Login);
