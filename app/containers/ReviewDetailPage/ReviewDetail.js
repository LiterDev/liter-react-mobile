/**
 *
 * Main
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { withStyles } from '@material-ui/core/styles';
import { Switch, Route, withRouter } from 'react-router-dom';

import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Typography from '@material-ui/core/Typography';

import DefaultCardHeader from 'components/Headers/DefaultCardHeader';
import DefaultCardFooter from 'components/Footers/DefaultCardFooter';

import Slider from 'components/Sliders/DefaultSlider';
import ContentsFooter from 'components/Footers/ContentsFooter';
import HashTagBox from 'components/Sections/HashTagBox';

const items = [
  {
    title: 1,
    imageUrl: 'http://img.vogue.co.kr/vogue/2016/01/style_5694bb34c88d4.jpg'
  },
  {
    title: 2,
    youtubeId: 'sYxy7-tog0o'
  },
  {
    title: 3,
    imageUrl:
      'http://img.tenasia.hankyung.com/webwp_kr/wp-content/uploads/2017/07/2017071314214916056.jpg'
  },
  {
    title: 4,
    imageUrl:
      'http://image.ceci.co.kr/upload/ARTICLEINFOCON/1475928112796htr1p8q.jpg'
  },
  {
    title: 5,
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPHpm9CbrEaneGdE5uAfp9jh1nAEkZfGhxlE-Thjbn6MVc-ZpCww'
  }
];
const hashTagList = [
  { id: '1', tagName: 'nike' },
  { id: '2', tagName: 'technology' },
  { id: '3', tagName: 'life' },
  { id: '4', tagName: 'science' },
  { id: '5', tagName: 'l4l' },
  { id: '6', tagName: '일상' },
  { id: '7', tagName: '흔남' },
  { id: '8', tagName: '셀피' },
  { id: '9', tagName: 'selfie' }
];
const styles = (theme) => ({
  ReviewDetailRoot: {
    background: 'white',
  },
  header: {},
  contents: {
    marginLeft: 16,
    marginRight: 16
  },
  footer: {}
});

const avatarImageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-6gG0UXRs6Mn7E5W0xWtMWl0gnvq4BXXwTtdj2LMXOHgGjjUo';

class ReviewDetail extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function


  render() {
    const { classes } = this.props;
    return (
      <div className={classes.ReviewDetailRoot}>
        {/* SEO HELMET */}
        <Helmet titleTemplate="main Page" defaultTitle="main Page">
          <meta
            name="description"
            content="A React.js Boilerplate application"
          />
        </Helmet>
        <DefaultCardHeader avatarImageUrl={avatarImageUrl}/>

        <Typography variant="title" gutterBottom align={'center'}>
          ReviewDetail Title
        </Typography>
        <Slider items={items} />
        <div className={classes.contents}>
          <Typography gutterBottom variant="body2">
            {
              'We are empirically mapping the variant property to a range of different DOM element types. For instance, h1 to h6. If you wish to change that mapping, you can provide your own. Alternatively, you can use the component property.'
            }
          </Typography>
          <HashTagBox hashTagList={hashTagList} />
        </div>
          <DefaultCardFooter />
      </div>
    );
  }
}

ReviewDetail.propTypes = {
  classes: PropTypes.object
};
export default withStyles(styles)(ReviewDetail);
