import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './theme.js';
import CssBaseline from '@material-ui/core/CssBaseline';
import JssProvider from 'react-jss/lib/JssProvider';

class AppWrapper extends React.Component {

  componentDidUpdate(prevProps) {
    // if (this.props.location !== prevProps.location) {
    //   window.scrollTo(0, 0);
    // }
  }

  render() {
    const { children } = this.props;

    return (
      <JssProvider>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </MuiThemeProvider>
      </JssProvider>
    );
  }
}

AppWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object,
};

export default withRouter(
  connect((state) => ({
    uiTheme: state.theme
  }))(AppWrapper)
);
