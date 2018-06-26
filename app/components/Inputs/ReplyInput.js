/**
 * InputTextCard.js created by 08liter
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

import TextButton from 'components/Buttons/TextButton';
import grey from '@material-ui/core/colors/grey';

import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

const styles = (theme) => ({
  root: {
    display: 'flex'
  },
  avatar: {
    marginRight: theme.spacing.unit
  },
  miniAvatar: {
    height: theme.spacing.unit * 3,
    width: theme.spacing.unit * 3
  },
  input: {
    fontSize: theme.fontSize.input.default,
    background: 'white',
    zIndex: 1,
    width: '100%',
    '&::before': {
      content: `' '`,
      border: 0
    }
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: -theme.spacing.unit * 4,
    opacity: 0,
    minHeight: 0,
    transition: theme.transitions.create('all', {
      duration: theme.transitions.duration.shortest
    }),
    '&.active': {
      minHeight: 'auto',
      opacity: 1,
      marginTop: theme.spacing.unit
    }
  },
  button: {
    fontSize: 14,
    minWidth: theme.spacing.unit * 8,
    minHeight: theme.spacing.unit * 4,
    padding: `${theme.spacing.unit / 4}px ${theme.spacing.unit}px`,
    boxShadow: 'none',
    borderRadius: 2
  }
});

const borderStyle = {
  borderBottom: `0.4px solid ${grey[100]}`,
  paddingBottom: 24
};

class ReplyInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFocusInput: false
    };
    this.onInputFocus = this.onInputFocus.bind(this);
    this.onInputFocusIn = this.onInputFocusIn.bind(this);
    this.onInputFocusOut = this.onInputFocusOut.bind(this);
    this.handleInputFocus = this.handleInputFocus.bind(this, false);
  }

  componentDidMount() {
    const { id = 'replyInput' } = this.props;
    document.getElementById(id).addEventListener('focus', this.onInputFocus);
    document
      .getElementById(id)
      .addEventListener('focusin', this.onInputFocusIn);
    document
      .getElementById(id)
      .addEventListener('focusout', this.onInputFocusOut);
  }
  componentWillUnmount() {
    const { id = 'replyInput' } = this.props;
    document.getElementById(id).removeEventListener('focus', this.onInputFocus);
    document
      .getElementById(id)
      .removeEventListener('focusin', this.onInputFocusIn);
    document
      .getElementById(id)
      .removeEventListener('focusout', this.onInputFocusOut);
  }

  onInputFocus(event) {
    console.log('onInputFocus');
  }
  onInputFocusIn(event) {
    console.log('onInputFocusIn');
    this.setState({
      isFocusInput: true
    });
  }
  onInputFocusOut(event) {
    console.log('onInputFocusOut');
    // this.setState({
    //   isFocusInput: false
    // });
  }

  handleInputFocus(isOpen) {
    this.setState({
      isFocusInput: isOpen
    });
  }

  render() {
    const { isFocusInput } = this.state;
    const {
      classes,
      isBorderBottom = false,
      mini = false,
      id = 'replyInput'
    } = this.props;

    const avatarImageUrl =
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzPN_U0UOnl1xw2wtT9O_sBgUSB_DwjBIOJGJ9LP89YpE9S7Xo';

    return (
      <div style={(isBorderBottom && borderStyle) || {}}>
        <div className={classes.root}>
          {avatarImageUrl ? (
            <Avatar
              aria-label="Recipe"
              className={classNames(classes.avatar, {
                [classes.miniAvatar]: mini
              })}
              src={avatarImageUrl}
              alt={'Recipe'}
            />
          ) : (
            <Avatar
              aria-label="Recipe"
              className={classNames(classes.avatar, {
                [classes.miniAvatar]: mini
              })}
              src={avatarImageUrl}
            >
              R
            </Avatar>
          )}
          <Input
            className={classes.input}
            placeholder={'메시지 추가...'}
            id={id}
          />
        </div>
        <div
          className={classNames(classes.buttonContainer, {
            active: isFocusInput
          })}
        >
          <Button
            variant={'flat'}
            size={mini ? 'small' : 'medium'}
            className={classes.button}
            onClick={() => {
              this.handleInputFocus(false);
            }}
          >
            취소
          </Button>
          <Button
            variant={'contained'}
            size={mini ? 'small' : 'medium'}
            className={classes.button}
            color="primary"
            onClick={() => {
              this.handleInputFocus(false);
            }}
          >
            댓글
          </Button>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(ReplyInput);
