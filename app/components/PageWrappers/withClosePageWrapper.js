/**
 * Modals.js created by 08liter
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import CloseButton from 'components/Buttons/CloseButton';

const modalHeaderStyle = {
  width: '100%',
  borderBottom: '0.4px solid #f5f5f5',
  position: 'fixed',
  top: 0,
  backgroundColor: 'white',
  zIndex: 100
};
const rootStyle = {
  paddingTop: 48,
  // wtf slick width issue
  width: '100vw'
};

const withClosePageWrapper = () => (WrappedComponent) => {
  class closerClass extends React.Component {
    static propTypes = {
      history: PropTypes.object.isRequired,
      location: PropTypes.object.isRequired,
      children: PropTypes.object
    };

    constructor(props) {
      super(props);
      this.state = {
        wtf: 'wtf'
      };
    }
    render() {
      return (
        <div style={rootStyle}>
          <header style={modalHeaderStyle}>
            <CloseButton
              data-button-style="modalClose"
              onClick={() => {
                this.props.history.goBack();
              }}
            />
          </header>
          <WrappedComponent {...this.props} />
        </div>
      );
    }
  }
  return closerClass;
};

export default withClosePageWrapper;
