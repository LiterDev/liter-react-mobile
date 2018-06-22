/**
 * ModalCloseButton.js created by 08liter
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import ReplyIcon from '@material-ui/icons/Reply';

const styles = (theme) => ({
  root: {
    margin: 0,
    minWidth: theme.spacing.unit * 8,
    height: theme.spacing.unit * 4,
    padding: 4,
  }
});

function ReplyButton(props) {
  const { classes, onClick, replyCount = 0 } = props;

  return (
    <Button
      className={classes.root}
      aria-label={'close-button'}
      onClick={onClick}
    >
      <ReplyIcon />
      {replyCount}
    </Button>
  );
}

export default withStyles(styles)(ReplyButton);
