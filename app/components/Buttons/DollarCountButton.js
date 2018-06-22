/**
 * ModalCloseButton.js created by 08liter
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = (theme) => ({
  root: {
    margin: 0,
    minWidth: theme.spacing.unit * 8,
    height: theme.spacing.unit * 4,
    padding: 4,
  }
});

function DollarCountButton(props) {
  const { classes, onClick, dollerTotal = 0 } = props;

  return (
    <Button
      className={classes.root}
      aria-label={'close-button'}
      onClick={onClick}
    >
      {<ExpandMoreIcon />}
      {`$ ${dollerTotal || 211.1}`}
    </Button>
  );
}

export default withStyles(styles)(DollarCountButton);
