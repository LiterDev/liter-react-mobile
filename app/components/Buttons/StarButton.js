/**
 * ModalCloseButton.js created by 08liter
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import StarIcon from '@material-ui/icons/Star';
import colorYellow from '@material-ui/core/colors/yellow';

const styles = (theme) => ({
  iconWrapper: {


  },
  root: {

    minWidth: theme.minHeight.miniButton.default,
    minHeight: theme.minWidth.miniButton.default,

    backgroundColor: 'rgba(0,0,0,0.5)',
    color: 'white',

    margin: theme.spacing.unit / 4,

    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: theme.spacing.unit /2,
    paddingRight: theme.spacing.unit/ 2,

    borderRadius: 2,
  },
  icon: {
    fontSize: theme.fontSize.icon.default,
    marginRight: theme.spacing.unit / 2,
    color: 'white'
  },
  label: {
    fontSize: theme.fontSize.iconLabel.default,
    verticalAlign: 'middle'
  }
});

function StarButton(props) {
  const { classes, onClick, label = 0 } = props;

  return (
    <div >
      <Button className={classes.root} aria-label="Share" onClick={onClick}>
        <StarIcon className={classes.icon} />
        <span className={classes.label}>{label}</span>
      </Button>
    </div>
  );
}

export default withStyles(styles)(StarButton);
