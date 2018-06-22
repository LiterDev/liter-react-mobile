import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Link, Redirect, withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import _ from 'lodash';
import './style.scss';

const styles = (theme) => ({
  container: {
    // display: 'flex',
    // flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '100%'
  },
  fillButton: {
    width: '100%'
  },
  menu: {
    width: 200
  },
  helpMenu: {
    display: 'flex',
    justifyContent: 'space-between'
    // '& > div':
  }
});

const inputFormData = {
  login: [
    {
      id: 'usernameForm',
      label: 'username',
      prop: 'username'
    },
    {
      id: 'passwordForm',
      label: '비밀번호',
      type: 'password',
      prop: 'password'
    }
  ],
  signIn: [
    {
      id: 'usernameForm',
      label: 'username',
      prop: 'username'
    },
    {
      id: 'passwordForm',
      label: '비밀번호',
      prop: 'password',
      type: 'password'
    },
    {
      id: 'passwordConfirmForm',
      label: '비밀번호 확인',
      prop: 'passwordConfirm',
      type: 'password'
    }
  ],
  findPassword: [
    {
      id: 'mail',
      label: '비밀번호 확인',
      prop: 'mail',
      type: 'mail'
    }
  ]
};

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: 'test',
      password: 'test1234!T'
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (name) => (event) => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    const {
      classes,
      location,
      pathname,
      onSubmitLogin,
      auth
    } = this.props;
    const camelPathname = _.camelCase(pathname);
    console.log('camelPathname', camelPathname)

    if (!inputFormData[camelPathname]) {
      return ''
    }

    const renderInput = inputFormData[camelPathname].map((data) => {
      const { id, label, prop, type } = data;
      return (
        <TextField
          key={id}
          id={id}
          label={label}
          className={classes.textField}
          value={this.state[prop]}
          onChange={this.handleChange(prop)}
          margin="normal"
          type={type}
        />
      );
    });

    return [
      <section key="loginForm-section-1">
        <form className={classes.container} noValidate autoComplete="off">
          {renderInput}
          <Button
            className={classes.fillButton}
            variant="contained"
            color="primary"
            onClick={() => {
              const { username, password } = this.state;
              onSubmitLogin(username, password);
            }}
          >
            로그인_{_.get(auth, 'token')}
          </Button>
        </form>
      </section>,
      <section key="loginForm-section-2">
        <div className={classes.helpMenu}>
          <div>리터 계정이 없으세요?</div>
          <div>
            <Button color="primary" className={classes.button}>
              <Link to="/sign_in">회원가입</Link>
            </Button>
          </div>
        </div>
        <div className={classes.helpMenu}>
          <div>비밀번호 생각나지 않으세요?</div>
          <div>
            <Button color="primary" className={classes.button}>
              <Link to="/find_password">찾기</Link>
            </Button>
          </div>
        </div>
        <div className={classes.helpMenu}>
          <div>로그인</div>
          <div>
            <Button color="primary" className={classes.button}>
              <Link to="/login">로그인</Link>
            </Button>
          </div>
        </div>
      </section>
    ];
  }
}

LoginForm.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  pathname: PropTypes.string,
  onSubmitLogin: PropTypes.func
};

export default withStyles(styles)(LoginForm);
