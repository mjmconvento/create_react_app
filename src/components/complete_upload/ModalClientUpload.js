import React, { Component } from "react";
import {
  Icon,
  Grid,
  Table,
  Modal,
  Button,
  Image,
  Accordion,
  Form,
  TextArea
} from "semantic-ui-react";
import xls_image from "./images/xls.png";
import ModalDropzone from "./ModalDropzone";
import CommentSample from "./CommentSample";

class ModalClientUpload extends Component {
  state = {
    modalOpen: false,
    activeIndex: 0
  };

  handleOpen = () => this.setState({ modalOpen: true });
  handleClose = () => this.setState({ modalOpen: false });
  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  render() {

    return (

      <Modal
        trigger={<Icon name="folder open" size="big" color="grey" className="pointer" onClick={this.handleOpen} />}
        open={this.state.modalOpen}
        onClose={this.handleClose}
      >
        <Modal.Header>Texas Nursing Home</Modal.Header>
        <Modal.Content>
          Message
        </Modal.Content>
      </Modal>
    );
  }
}
// 

export default ModalClientUpload;
