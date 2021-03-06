import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import DefaultCardHeader from 'components/Headers/DefaultCardHeader';
import ReviewListCardContent from 'components/Sections/ReviewListCardContent';
import DefaultCardFooter from 'components/Footers/DefaultCardFooter';

const styles = (theme) => ({
  card: {
    margin: 'auto',
    marginTop: 10,
    boxShadow: 'none'
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  actions: {
    display: 'flex'
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    }),
    marginLeft: 'auto'
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  }
});

const imageUrl = 'http://cfile217.uf.daum.net/image/27458C4B5427B61919A21A';
const avatarImageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-6gG0UXRs6Mn7E5W0xWtMWl0gnvq4BXXwTtdj2LMXOHgGjjUo';


class ReviewThumbnailCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    const { classes, reviewId } = this.props;

    return (
      <div>
        <Card className={classes.card}>
          <DefaultCardHeader avatarImageUrl={avatarImageUrl} />
          <ReviewListCardContent reviewId={reviewId} imageUrl={imageUrl} />
          <DefaultCardFooter label={reviewId}/>
          {/*<CardActions className={classes.actions} disableActionSpacing>*/}
            {/*<IconButton aria-label="Add to favorites">*/}
              {/*<FavoriteIcon />*/}
            {/*</IconButton>*/}
            {/*<IconButton aria-label="Share">*/}
              {/*<ShareIcon />*/}
            {/*</IconButton>*/}
            {/*<IconButton*/}
              {/*className={classNames(classes.expand, {*/}
                {/*[classes.expandOpen]: this.state.expanded*/}
              {/*})}*/}
              {/*onClick={this.handleExpandClick}*/}
              {/*aria-expanded={this.state.expanded}*/}
              {/*aria-label="Show more"*/}
            {/*>*/}
              {/*<ExpandMoreIcon />*/}
            {/*</IconButton>*/}
          {/*</CardActions>*/}
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph variant="body2">
                Method:
              </Typography>
              <Typography paragraph>
                Heat 1/2 cup of the broth in a pot until simmering, add saffron
                and set aside for 10 minutes.
              </Typography>
              <Typography paragraph>
                Heat oil in a (14- to 16-inch) paella pan or a large, deep
                skillet over medium-high heat. Add chicken, shrimp and chorizo,
                and cook, stirring occasionally until lightly browned, 6 to 8
                minutes. Transfer shrimp to a large plate and set aside, leaving
                chicken and chorizo in the pan. Add pimentón, bay leaves,
                garlic, tomatoes, onion, salt and pepper, and cook, stirring
                often until thickened and fragrant, about 10 minutes. Add
                saffron broth and remaining 4 1/2 cups chicken broth; bring to a
                boil.
              </Typography>
              <Typography paragraph>
                Add rice and stir very gently to distribute. Top with artichokes
                and peppers, and cook without stirring, until most of the liquid
                is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add
                reserved shrimp and mussels, tucking them down into the rice,
                and cook again without stirring, until mussels have opened and
                rice is just tender, 5 to 7 minutes more. (Discard any mussels
                that don’t open.)
              </Typography>
              <Typography>
                Set aside off of the heat to let rest for 10 minutes, and then
                serve.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    );
  }
}

ReviewThumbnailCard.propTypes = {
  classes: PropTypes.object.isRequired,
  reviewId: PropTypes.number
};

export default withStyles(styles)(ReviewThumbnailCard);
