/**
 * TextButton.js created by 08liter
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = (theme) => ({
  root: {
    backgroundColor: 'white'
  },
  icon: {
  },
  label: {
  }
});

function TextButton(props) {
  const { classes, onClick, label = '' } = props;
  return (
    <div>
      <Button
        className={classes.root}
        aria-label={'button'}
        onClick={onClick}
      >
        <span className={classes.label}>{`${label}`}</span>
      </Button>
    </div>
  );
}

export default withStyles(styles)(TextButton);
