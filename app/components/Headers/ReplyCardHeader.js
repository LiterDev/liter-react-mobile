/**
 * DefaultCardHeader.js created by 08liter
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import red from '@material-ui/core/colors/red';

const styles = (theme) => ({
  root: {
    lineHeight: 'normal',
    paddingLeft: 0,
    paddingRight: 0,
  },
  avatar: {
    backgroundColor: red[500]
  },
  username: {
    color: 'black',
  },
  isFollow: {
    marginLeft: theme.spacing.unit,
    color: theme.palette.primary.light
  },
  subheader: {
    color: theme.palette.whiteGray,
    fontSize: 12,
    lineHeight: 'normal'
  }
});

class ReplyCardHeader extends React.PureComponent {
  render() {
    const { classes, avatarImageUrl } = this.props;
    return (
      <CardHeader
        className={classNames(classes.root)}
        avatar={
          avatarImageUrl || true ? (
            <Avatar
              aria-label="Recipe"
              className={classes.avatar}
              src={avatarImageUrl}
              alt={'Recipe'}
            />
          ) : (
            <Avatar
              aria-label="Recipe"
              className={classes.avatar}
              src={avatarImageUrl}
            >
              R
            </Avatar>
          )
        }
        title={
          <div>
            <span className={classes.username} >Jimmey</span> <span className={classes.subheader}>방금전</span>
          </div>
        }
        subheader={<div><span>something ..somethinasdasdkansdkasndkg .....something  ...</span></div>}
      />
    );

  }
}

ReplyCardHeader.propTypes = {
  classes: PropTypes.object.isRequired,
  avatarImageUrl: PropTypes.string
};

export default withStyles(styles)(ReplyCardHeader);
