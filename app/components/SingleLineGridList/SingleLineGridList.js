import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Avatar from '@material-ui/core/Avatar';

import image00 from './images/image00.jpeg';
import image01 from './images/image01.jpg';
import image02 from './images/image02.jpg';

const styles = (theme) => ({
  gridListWrapper: {
    display: 'flex',
    width: '100%',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    // backgroundColor: theme.palette.background.paper
    backgroundColor: 'white',

    height: 100
  },
  gridList: {
    flexWrap: 'nowrap',
    width: '100%',
    // height: '200px',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)'
    // backgroundColor: '#767676'
  },
  GridListTile: {
    margin: '10px 10px'
  },
  avatar: {
    // margin: 10
  },
  imageAvatar: {
    width: '100%',
    height: 'auto',
    opacity: 0.1
  },
  title: {
    color: theme.palette.primary.light
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)'
  }
});
const testImageArray = [image00, image01, image02];
const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const SingleLineGridList = (props) => (
  <div className={props.classes.gridListWrapper}>
    <GridList className={props.classes.gridList} cols={props.cols || 4.5} cellHeight={'auto'}>
      {(props.list || testArray).map((tile, index) => {
        return (
          <GridListTile className={classNames('GridListTile')} key={tile}>
            <Avatar
              alt={`avatar ${tile}`}
              src={testImageArray[index % testImageArray.length]}
              sizes="(min-width: 650px) 50px, 100px"
              className={classNames(
                props.classes.avatar,
                props.classes.imageAvatar
              )}
            />
          </GridListTile>
        );
      })}
    </GridList>
  </div>
);

SingleLineGridList.propTypes = {
  classes: PropTypes.object.isRequired,
  cols: PropTypes.number,
  list: PropTypes.array
};

export default withStyles(styles)(SingleLineGridList);
