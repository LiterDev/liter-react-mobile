/**
 * HashTagBox.js created by 08liter
 */
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import HashTagButton from 'components/Buttons/HashTagButton';

const styles = (theme) => ({
  root: {
    // display: 'flex',
    // justifyContent: 'space-between',
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
  }
});

const HashTagBox = (props) => {
  const { classes, hashTagList = [] } = props;

  const renderHashTagButton = (_hashTagList) =>
    _hashTagList.map((item, index) => {
      const { id = '', tagName = '' } = item;
      return (
        <HashTagButton
          key={id + tagName}
          id={id}
          tagName={tagName}
          groupId={index % 4}
        />
      );
    });
  return (
    <section className={classes.root}>
      {renderHashTagButton(hashTagList)}
    </section>
  );
};

export default withStyles(styles)(HashTagBox);
