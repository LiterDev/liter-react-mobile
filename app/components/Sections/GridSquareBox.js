/**
 * GridSquareBox.js created by 08liter
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import CheckCircleButton from 'components/Buttons/CheckCircleButton';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';


const styles = (theme) => ({
  flexContainer: {
    display: 'flex',
    justifyContent: 'start',
    flexWrap: 'wrap'
  },
  flexCell: {
    flex: '0 0 33.3%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'stretch',
    padding: 0.5,
    boxSizing: 'border-box',
    '&::before': {
      content: `''`,
      display: 'table',
      paddingTop: '100%'
    }
  },
  flexItem: {
    flexGrow: 1,
    // border: '1px solid black',
    background: 'tomato',
    color: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundSize: 'cover'
  },


  header: {
    width: '100%',
    textAlign: 'right',
  },
  icon: {
    margin: theme.spacing.unit / 4
  },
  footer: {
    fontSize: 12,
    width: '100%',
    padding: 4
  }
});

class GridSquareBox extends React.Component {
  render() {
    const { classes, tileData = [] } = this.props;

    const renderSquareButton = (_tileDataList) =>
      _tileDataList.map((item, index) => {
        const { id = '', title = '', imageUrl = '' } = item;
        return (
          <div className={classes.flexCell}>
            <div
              className={classes.flexItem}
              style={{ backgroundImage: `url(${imageUrl})` }}
            >
              <div className={classes.header}>
                <CheckCircleIcon className={classes.icon} color="primary" />
              </div>

              <div className={classes.footer}>
                <span>{`#${title}`}</span>
              </div>
            </div>
          </div>
        );
      });
    return (
      <section className={classes.root}>
        <div className={classes.flexContainer}>
          {renderSquareButton(tileData)}
        </div>
      </section>
    );
  }
}

GridSquareBox.PropTypes = {};

export default withStyles(styles)(GridSquareBox);
