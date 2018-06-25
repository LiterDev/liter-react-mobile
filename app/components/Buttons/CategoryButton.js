/**
 * CategoryButton.js created by 08liter
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import colorRed from '@material-ui/core/colors/red';
import colorBlue from '@material-ui/core/colors/blue';
import colorGreen from '@material-ui/core/colors/green';
import colorYellow from '@material-ui/core/colors/yellow';
const colorWhite = '#fff';

const styles = (theme) => ({
  root: {
    minWidth: theme.minHeight.miniButton.default,
    minHeight: theme.minWidth.miniButton.default,

    margin: theme.spacing.unit / 4,

    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: theme.spacing.unit * 1.5,
    paddingRight: theme.spacing.unit * 1.5,

    backgroundColor: colorYellow[800],
    color: colorWhite,

    borderRadius: 2,

    '&:active': {
      backgroundColor: colorYellow[600],
    }
  }
});

function CategoryButton(props) {
  const { classes, onClick, label = '' } = props;
  return (
    <div>
      <Button className={classes.root} aria-label={'button'} onClick={onClick}>
        <span className={classes.label}>{`${label}`}</span>
      </Button>
    </div>
  );
}

export default withStyles(styles)(CategoryButton);
