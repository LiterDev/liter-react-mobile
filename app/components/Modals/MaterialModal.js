/**
 * Modals.js created by 08liter
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
// import CloseButton from 'components/Buttons/CloseButton';
import Modal from '@material-ui/core/Modal';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  paper: {
    position: 'absolute',
    width: '80%',
    // width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4
  }
});
const modalStyle = {
  top: 0,
  bottom: 0,
  left: 0,
  right: 0
};

class MaterialModal extends React.Component {
  //   class Modals extends React.Component {

  static propTypes = {
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    children: PropTypes.object
  };

  constructor(props) {
    super(props);

    this.state = {};
    this.handleOnRendered = this.handleOnRendered.bind(this);
    // this.handleModal = this.handleModal.bind(this);
  }

  handleOnRendered = (e) => {
    console.log('modalRender!!');
    console.log(e)

  }

  render() {
    const { classes } = this.props;

    return (
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        disableEscapeKeyDown
        onRendered={this.handleOnRendered}
        // open
        // onClose={this.handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <b>asdasdasd</b>
          {/*<Typography variant="title" id="modal-title">*/}
          {/*Text in a modal*/}
          {/*</Typography>*/}
          {/*<Typography variant="subheading" id="simple-modal-description">*/}
          {/*Duis mollis, est non commodo luctus, nisi erat porttitor ligula.*/}
          {/*</Typography>*/}
          {/*<SimpleModalWrapped />*/}
        </div>
      </Modal>
    );
  }
}

export default withStyles(styles)(MaterialModal);
