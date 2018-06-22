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
  borderBottom: '1px solid #b1b1b1',
  position: 'fixed',
  top: 0,
  backgroundColor: 'white',
  zIndex: 100
};
const rootStyle = {
  paddingTop: 50,
  // wtf slick width issue
  width: '100vw'
};

const styles = (theme) => {

}

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
