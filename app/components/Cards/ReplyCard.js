/**
 * DefaultCard.js created by 08liter
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Collapse from '@material-ui/core/Collapse';

import red from '@material-ui/core/colors/red';

import ExpandMoreButton from 'components/Buttons/ExpandMoreButton';

import ReplyInput from 'components/Inputs/ReplyInput';
import ReplayCard from 'components/Cards/ReplyCard';

const styles = (theme) => ({
  root: {
    lineHeight: 'normal',
    alignItems: 'start',
    paddingLeft: 0,
    paddingRight: 0
  },
  avatar: {
    backgroundColor: red[500],
    marginTop: theme.spacing.unit
  },
  username: {
    color: 'black'
  },
  isFollow: {
    marginLeft: theme.spacing.unit,
    color: theme.palette.primary.light
  },
  subheader: {
    marginLeft: theme.spacing.unit * 1.5,
    color: theme.palette.whiteGray,
    fontSize: 10,
    lineHeight: 'normal',
    wordWrap: 'break-word'
  },

  replyButtonWrapper: {
    background: 'white'
  },
  replyButton: {
    padding: 0,
    minWidth: theme.spacing.unit * 3,
    minHeight: theme.spacing.unit * 2
  }
});

class ReplyCardHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpenWriteReply: false
    };
    this.handleWriteReply.bind(this);
  }

  handleWriteReply = () => {
    this.setState({
      isOpenWriteReply: !this.state.isOpenWriteReply
    });
  };

  render() {
    const { isOpenWriteReply } = this.state;
    const { classes, avatarImageUrl, id = '', deep } = this.props;
    const list = [1, 2, 3, 4, 5, 6];
    console.log(this.props)

    // const renderReplayCard = () => {
    //   if (deep > -1) {
    //     return list.map(i => <ReplayCard id={i} deep={deep -1 }/>);
    //   }
    // }
    return (
      <div>
        <CardHeader
          className={classNames(classes.root)}
          avatar={
            avatarImageUrl || true ? (
              <Avatar
                aria-label="Recipe"
                className={classes.avatar}
                style={{ background: red[200] }}
                src={avatarImageUrl}
                alt={'Recipe'}
              />
            ) : (
              <Avatar
                aria-label="Recipe"
                style={{ background: red[200] }}
                src={avatarImageUrl}
              >
                R
              </Avatar>
            )
          }
          title={
            <div>
              <span className={classes.username}>Jimmey</span>{' '}
              <span className={classes.subheader}>방금전</span>
            </div>
          }
          subheader={
            <div>
              <span>
                something ..somethinasda sdkansdkasndkg .....something ...
              </span>
              <div className={classes.replyButtonWrapper}>
                <Button
                  classes={{
                    root: classes.replyButton
                  }}
                  onClick={() => this.handleWriteReply()}
                >
                  답글
                </Button>
              </div>
              <Collapse in={isOpenWriteReply}>
                <ReplyInput id={id} mini={true} />
              </Collapse>
              <div>
                <ExpandMoreButton label={'답글 17개 모두 보기'} reverse />
              </div>
            </div>
          }
        />
      </div>
    );
  }
}

ReplyCardHeader.propTypes = {
  classes: PropTypes.object.isRequired,
  avatarImageUrl: PropTypes.string
};

export default withStyles(styles)(ReplyCardHeader);
