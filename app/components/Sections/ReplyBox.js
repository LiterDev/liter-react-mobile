/**
 * ReplyBox.js created by 08liter
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Input from '@material-ui/core/Input';

import ReplyCard from 'components/Cards/ReplyCard';
import ReplyInput from 'components/Inputs/ReplyInput';

const styles = (theme) => ({
  replyBoxWrapper: {
    background: 'white',
    marginTop: theme.spacing.unit * 2,

    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2
  },
  replyBoxInner: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  root: {},
  header: {
    fontWeight: 'bold'
  }
});

class ReplyBox extends React.PureComponent {
  render() {
    const { classes } = this.props;
    const replyList = [1, 2, 3, 4, 5, 6, 7];

    const renderReply = () => {
      return (replyList || []).map((i, index) => <ReplyCard id={index} deep={2} />);
    };

    return (
      <div className={classes.replyBoxWrapper}>
        <Typography className={classes.header} gutterBottom>
          댓글 80
        </Typography>
        <div>
          <ReplyInput isBorderBottom={true} />
        </div>
        <div>{renderReply()}</div>
      </div>
    );
  }
}

ReplyBox.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ReplyBox);
