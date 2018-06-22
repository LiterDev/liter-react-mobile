/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import Modal from 'react-modal';

import SimpleImageHeader from 'components/SimpleImageHeader';
import LoginForm from 'components/LoginForm';

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

class WellcomeSetFavorite extends React.PureComponent {
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
  };

  render() {
    const { classes, history, location, auth } = this.props;
    const token = (auth && auth.token) || '';

    const pathname = this.props.location.pathname.replace(/\//gi, '');
    const handleModal = () => {
      return RegExp('login|sign_in|find_password').test(pathname);
    };

    // console.log(this.props);

    return (
      <div>
        <Helmet titleTemplate="%s - Login" defaultTitle="title">
          <meta name="description" content="LoginPage" />
        </Helmet>
      </div>
    );
  }
}

WellcomeSetFavorite.propTypes = {
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

export default withStyles(styles)(WellcomeSetFavorite);
