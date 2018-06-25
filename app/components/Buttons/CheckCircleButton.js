/**
 * ModalCloseButton.js created by 08liter
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const styles = (theme) => ({
  root: {
    margin: theme.spacing.unit,
    width: theme.spacing.unit * 4,
    height: theme.spacing.unit * 4
  }
});

function CheckCircleButton(props) {
  const { classes, onClick } = props;
  return (
    <IconButton
      className={classes.root}
      aria-label={'close-button'}
      onClick={onClick}
    >
      <CheckCircleIcon />
    </IconButton>
  );
}

export default withStyles(styles)(CheckCircleButton);
