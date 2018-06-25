/**
 * DefaultCardFooter.js created by 08liter
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import FavoriteButton from 'components/Buttons/FavoriteButton';
import ShareButton from 'components/Buttons/ShareButton';
import ReplyButton from 'components/Buttons/ReplyButton';
import DollarCountButton from 'components/Buttons/DollarCountButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import grey from '@material-ui/core/colors/grey';

const styles = (theme) => ({
  actions: {
    display: 'flex',
    '& > :first-child': {
      marginLeft: -theme.spacing.unit,
    },
    '& > :last-child': {
      marginLeft: 'auto'
    },
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    marginTop: theme.spacing.unit / 4,
    marginBottom: theme.spacing.unit / 4,
    padding: 0,
    borderTop: `${theme.palette.border.default} 1px solid`
  }
});

class DefaultCardFooter extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <CardActions className={classes.actions} disableActionSpacing>
        <FavoriteButton label={'200'} />
        <ShareButton label={'4'} />
        <ReplyButton label={'10'} />
        <DollarCountButton label={662.11} />
      </CardActions>
    );
  }
}

DefaultCardFooter.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DefaultCardFooter);
