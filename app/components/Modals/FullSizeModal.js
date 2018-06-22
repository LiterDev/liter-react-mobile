/**
 * Modals.js created by 08liter
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import Modal from 'react-modal';
import CloseButton from 'components/Buttons/CloseButton';

const styles = {
  closeButton: {}
};

const sideMargin = 0;
const modalStyles = {
  overlay: {
    backgroundColor: 'papayawhip',
    zIndex: 2200
  },
  content: {
    color: 'lightsteelblue',
    border: 'none',
    padding: 0,
    top: sideMargin,
    bottom: sideMargin,
    left: sideMargin,
    right: sideMargin
  }
};
const modalHeaderStyle = {
  borderBottom: '1px solid #b1b1b1'
};

Modal.setAppElement('#app');

const withFullSizeModal = (pathname) => (WrappedComponent) => {
  return class extends React.Component {
    //   class Modals extends React.Component {

    static propTypes = {
      history: PropTypes.object.isRequired,
      location: PropTypes.object.isRequired,
      children: PropTypes.object
    };

    constructor(props) {
      super(props);
      console.log(pathname);
      console.log(props);
      this.state = {};
      // this.handleModal = this.handleModal.bind(this);
      this.afterOpenModal = this.afterOpenModal.bind(this);
    }
    afterOpenModal() {
      function hidden() {
        document.body.style.overflow = 'hidden';
      }

      hidden()
    }

    render() {
      const isOpenModal = () => {
        const nowPath = this.props.location.pathname.replace(/\//gi, '');
        console.log(nowPath, pathname);
        console.log(
          RegExp(nowPath).test(pathname),
          RegExp(pathname).test(nowPath)
        );
        return RegExp(pathname).test(nowPath);
      };
      const isOpen = isOpenModal();

      return (
        <Modal
          isOpen={isOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={() => {
            this.props.history.goBack();
          }}
          style={modalStyles}
          ariaHideApp={false} /* prevent warning */
        >
          <div style={modalHeaderStyle}>
            <CloseButton
              data-button-style="modalClose"
              onClick={() => {
                this.props.history.goBack();
              }}
            />
          </div>
          <WrappedComponent {...this.props} />
          <Route
            path={pathname}
            component={<WrappedComponent {...this.props} />}
          />
        </Modal>
      );
    }
  };
};

export default withFullSizeModal;
