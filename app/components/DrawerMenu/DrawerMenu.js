import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

import { accountList, middleList, lastList } from './MenuLists';

const styles = (theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
});

const DrawerMenu = (props) => {
  const isAuth = !!props.accessToken;
  const renderListMenu = (list) => {
    return (
      <List component={'nav'}>
        {list.map((item, index) => {
          const { label, to, showAuth } = item;
          const key = to + label;
          if (_.isUndefined(showAuth)) {
            return (
              <ListItem key={key} button component={NavLink} to={to}>
                <ListItemText primary={label} />
              </ListItem>
            );
          } else {
            return (
              (showAuth ===
              isAuth) && (
                <ListItem
                  key={key}
                  button
                  component={NavLink}
                  to={to}
                >
                  <ListItemText primary={label} />
                </ListItem>
              )
            );
          }
        })}
      </List>
    );
  };
  return [
    <List key={'l-1'}>{renderListMenu(accountList)}</List>,
    <Divider key={'d-1'} />,
    <List key={'l-2'}>{renderListMenu(middleList)}</List>,
    <Divider key={'d-2'} />,
    [] || <List key={'l-3'}>{renderListMenu(lastList)}</List>,
    <Divider key={'d-3'} />
  ];
};

DrawerMenu.propTypes = {
  classes: PropTypes.object.isRequired,
  auth: PropTypes.object,
  accessToken: PropTypes.string,
  items: PropTypes.array
};

export default withStyles(styles)(DrawerMenu);
