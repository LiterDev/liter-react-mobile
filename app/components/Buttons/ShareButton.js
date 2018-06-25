/**
 * ModalCloseButton.js created by 08liter
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import ShareIcon from '@material-ui/icons/Share';

const styles = (theme) => ({
  root: {},
  icon: {
    fontSize: theme.fontSize.icon.default
  },
  label: {
    marginLeft: -theme.spacing.unit,
    fontSize: theme.fontSize.iconLabel.default,
    verticalAlign: 'middle'
  }
});

function ShareButton(props) {
  const { classes, onClick, label = 0 } = props;

  return (
    <div>
      <IconButton className={classes.root} aria-label="Share" onClick={onClick}>
        <ShareIcon className={classes.icon} />
      </IconButton>
      <span className={classes.label}>{label}</span>
    </div>
  );
}

export default withStyles(styles)(ShareButton);
