/**
 * ModalCloseButton.js created by 08liter
 */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = (theme) => ({
  root: {
    width: theme.spacing.unit * 5,
    height: theme.spacing.unit * 5
  },
  icon: {
    fontSize: theme.fontSize.icon.default
  },
  label: {
    color: theme.palette.primary['600'],
    fontSize: theme.fontSize.iconLabel.default,
    fontWeight: 500,
    marginLeft: -theme.spacing.unit,
    verticalAlign: 'middle'
  },
  noMarginLeft: {
    marginLeft: 0
  }
});

function ExpandMoreButton(props) {
  const { classes, onClick, label = 0, reverse = false } = props;

  const renderComponent = () => {
    const components = [
      <IconButton
        className={classes.root}
        aria-label={'count dollar'}
        onClick={onClick}
      >
        {<ExpandMoreIcon className={classes.icon} />}
      </IconButton>,
      <span
        className={classNames(classes.label, {
          [classes.noMarginLeft]: reverse
        })}
      >{`${label}`}</span>
    ];
    if (reverse) {
      return components.reverse();
    }
    return components;
  };
  return <div>{renderComponent()}</div>;
}

export default withStyles(styles)(ExpandMoreButton);
