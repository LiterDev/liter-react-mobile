/**
 * ModalCloseButton.js created by 08liter
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

const styles = (theme) => ({
  root: {
    width: theme.spacing.unit * 5,
    height: theme.spacing.unit * 5,
  },
  icon: {
    fontSize: theme.fontSize.icon.default,
  },
  label: {
    fontSize: theme.fontSize.iconLabel.default,
    marginLeft: -theme.spacing.unit,
    verticalAlign: 'middle'
  }
});

function FavoriteButton(props) {
  const { classes, onClick, isFavorite = false, label = 0 } = props;

  return (
    <div>
      <IconButton
        className={classes.root}
        aria-label="Add to favorites"
        onClick={onClick}
      >
        {isFavorite ? <FavoriteIcon className={classes.icon} /> : <FavoriteBorderIcon className={classes.icon} />}
      </IconButton>
      <span className={classes.label}>{label}</span>
    </div>
  );
}

export default withStyles(styles)(FavoriteButton);
