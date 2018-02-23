import React, { Component } from 'react';
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
} from 'semantic-ui-react';
import xls_image from './images/xls.png';
import ModalDropzone from './ModalDropzone';
import CommentSample from './CommentSample';
import './css/modal_upload.css'

class ModalUpload extends Component {
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
    const data = require("./data/modal_upload_data");
    const { activeIndex } = this.state;

    return (
      <Modal
        trigger={
          <u className="pointer" onClick={this.handleOpen}>
            Upload report
          </u>
        }
        open={this.state.modalOpen}
        onClose={this.handleClose}
      >
        <Modal.Header>Upload Report - Texas Nursing Home</Modal.Header>
        <Modal.Content>
          <div>
            <ModalDropzone />

            <Table
              padded
              basic="very"
              id="modal_file_table"
            >
              <Table.Body>
                {data.map(data_node => (
                  <Table.Row key={data_node.id} className="full-width">
                    <Table.Cell>
                      <Accordion className="full-width">
                        <div key={data_node.id}>
                          <Accordion.Title
                            active={activeIndex === data_node.id}
                            index={data_node.id}
                            onClick={this.handleClick}
                          >
                            <Grid>
                              <Grid.Row>
                                <Grid.Column width={2}>
                                  <Image src={xls_image} size="tiny" />
                                </Grid.Column>
                                <Grid.Column width={10}>
                                  <div>
                                    <strong>{data_node.filename}</strong>
                                  </div>
                                  <div>{data_node.date_uploaded}</div>
                                </Grid.Column>
                                <Grid.Column width={4}>
                                  {data_node.is_draft ? (
                                    <div>
                                      <div>
                                        Status:
                                        <span className="text-blue">
                                          Draft
                                        </span>
                                      </div>
                                      <br />
                                      <div>
                                        <Icon name="send outline" size="big" />
                                        <Icon name="trash" size="big" />
                                      </div>
                                    </div>
                                  ) : (
                                    <div>
                                      <div>
                                        Status:
                                        <span className="text-green">
                                          Sent to client
                                        </span>
                                      </div>
                                      <br />
                                      <div>
                                        <Icon
                                          name="comments"
                                          className="pointer"
                                          size="big"
                                          color="blue"
                                          onClick={this.handleOpen}
                                        />
                                        <Icon name="trash" size="big" />
                                      </div>
                                    </div>
                                  )}
                                </Grid.Column>
                              </Grid.Row>
                            </Grid>
                          </Accordion.Title>

                          <Accordion.Content
                            active={activeIndex === data_node.id}
                          >

                          {!data_node.is_draft ? (

                            <div className="comment-wrapper">
                              <CommentSample />

                              <Form className="comment-form">
                                <TextArea rows="2" placeholder="..." />
                                <div className="button-wrapper">
                                  <Button
                                    positive
                                    content="Reply"
                                    size="small"
                                    className="pull-right"
                                  />
                                </div>
                              </Form>
                            </div>

                          ) : (
                            <div></div>
                          )}
                          </Accordion.Content>
                        </div>
                      </Accordion>
                    </Table.Cell>
                  </Table.Row>
                ))}

                <Table.Row>
                  <Table.Cell>
                    <Button
                      className="pull-right modal-close-button-wrapper"
                      negative
                      onClick={this.handleClose}
                    >
                      Close
                    </Button>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </div>
        </Modal.Content>
      </Modal>
    );
  }
}

export default ModalUpload;
