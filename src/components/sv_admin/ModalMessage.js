import React, { Component } from 'react';
import {
  Icon,
  Modal,
  Button,
  TextArea,
  Form
} from 'semantic-ui-react';
import CommentSample from './CommentSample';
import './css/modal_message.css'

class ModalMessage extends Component {
  state = { modalOpen: false }
  handleOpen = () => this.setState({ modalOpen: true })
  handleClose = () => this.setState({ modalOpen: false })

  render() {
    return (
      <Modal
        trigger={<Icon name="comments" className="pointer" size="big" color="blue" onClick={this.handleOpen} />}
        open={this.state.modalOpen}
        onClose={this.handleClose}
      >
        <Modal.Header>Texas Nursing Home</Modal.Header>
        <Modal.Content>
          <CommentSample />

          <Form id="modal_message_form">
            <TextArea rows="2" placeholder="..." />
            <div className="modal-message-btn-wrapper">

              <Button
                negative
                content="Close"
                size="small"
                className="pull-right"
                onClick={this.handleClose}
              />

              <Button
                positive
                content="Reply"
                size="small"
                className="pull-right close-btn"
              />

            </div>
          </Form>
        </Modal.Content>
      </Modal>
    );
  }
}

export default ModalMessage;
