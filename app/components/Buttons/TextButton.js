/**
 * TextButton.js created by 08liter
 */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = (theme) => ({});

function TextButton(props) {
  const {label} = this.props;
  return (
    <Button
      {...props}
    >
      {label}
    </Button>
  );
}

export default withStyles(styles)(TextButton);
