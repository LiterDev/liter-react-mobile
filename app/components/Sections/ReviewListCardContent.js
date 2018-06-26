/**
 * ReviewListCardContent.js created by 08liter
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CategoryButton from 'components/Buttons/CategoryButton';
import StarButton from 'components/Buttons/StarButton';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
  mediaWrapper: {
    position: 'relative'
  },
  mediaInnerButtonContainer: {
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,

    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,

    position: 'absolute',
    bottom: 0,
    display: 'flex'
  },
  media: {
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    height: 0,
    borderRadius: 5,
    paddingTop: '56.25%' // 16:9
  },
  title: {
    fontSize: theme.fontSize
  }
});

class ReviewListCardContent extends React.Component {
  render() {
    const { classes, reviewId, imageUrl, title, content } = this.props;
    return [
      <div
        key={'content' + reviewId + imageUrl}
        className={classes.mediaWrapper}
      >
        <Link
          key={imageUrl + title}
          to={`/review/${reviewId}`}
          style={{ textDecoration: 'none' }}
        >
          <CardMedia
            className={classes.media}
            image={imageUrl}
            title="Contemplative Reptile"
          />
        </Link>
        <div className={classes.mediaInnerButtonContainer}>
          <StarButton label={'4.5'} />
          <CategoryButton label={'NIKE'} />
        </div>
      </div>,
      <CardContent key={'cardContent' + imageUrl + title}>
        <Typography variant="title" gutterBottom>
          <b>포르투갈에서 서핑 즐기기</b>
        </Typography>
        <Typography component="p">
          전세계적으로 널리 알려진 해외 스타트업에는 어떤 것들이 있을까요? 그랩,
          샤오미, 우버, 에어비앤비……금방 떠올려도 단박에 나열할 수 있을...
          더보기
        </Typography>
      </CardContent>
    ];
  }
}

ReviewListCardContent.propTypes = {
  classes: PropTypes.object.isRequired,
  reviewId: PropTypes.number,
  imageUrl: PropTypes.string
};

export default withStyles(styles)(ReviewListCardContent);
