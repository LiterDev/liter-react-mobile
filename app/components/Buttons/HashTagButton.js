/**
 * ModalCloseButton.js created by 08liter
 */

import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import colorRed from '@material-ui/core/colors/red';
import colorBlue from '@material-ui/core/colors/blue';
import colorGreen from '@material-ui/core/colors/green';
import colorYellow from '@material-ui/core/colors/yellow';

const styles = (theme) => ({
  root: {
    margin: theme.spacing.unit / 4,
    minWidth: theme.spacing.unit * 2,
    minHeight: theme.spacing.unit * 3,

    paddingTop: theme.spacing.unit / 2,
    paddingBottom: theme.spacing.unit / 2,
    paddingLeft: theme.spacing.unit,
    paddingRight: theme.spacing.unit,

    marginBottom: theme.spacing.unit
  }
  // color: 'white'
});

function HashTagButton(props) {
  const { classes, onClick, tagName = '', id, groupId } = props;
  const colors = [colorRed[200], colorBlue[200], colorGreen[200], colorYellow[200]];
  const inStyle = {
    backgroundColor: colors[groupId]
  };
  return (
    <Button
      className={classes.root}
      aria-label={'close-button'}
      onClick={onClick}
      style={inStyle}
    >
      {`#${tagName || 'tagName'}`}
    </Button>
  );
}

export default withStyles(styles)(HashTagButton);
