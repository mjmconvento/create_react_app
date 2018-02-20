import React, { Component } from "react";
import {
  Icon,
  Modal,
  Button,
  TextArea,
  Form
} from "semantic-ui-react";
import CommentSample from "./CommentSample";

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

          <Form style={{ marginTop: '20px' }}>
            <TextArea rows="2" placeholder="..." />
            <div style={{ marginTop: '10px', marginBottom: '35px' }}>

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
                className="pull-right"
                style={{ marginRight: '5px' }}
              />

            </div>
          </Form>
        </Modal.Content>
      </Modal>
    );
  }
}

export default ModalMessage;
