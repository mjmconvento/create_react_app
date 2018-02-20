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
    const data = [
      {
        id: 1,
        filename: "2017_November_Monthly_Reports.xlsv",
        date_uploaded: "12/05/2017 10:21 am",
        is_draft: false
      },
      {
        id: 2,
        filename: "2017_November_Monthly_Reports.xlsv",
        date_uploaded: "12/04/2017 1:32 pm",
        is_draft: true
      },

      {
        id: 3,
        filename: "2017_November_Monthly_Reports.xlsv",
        date_uploaded: "12/04/2017 1:32 pm",
        is_draft: true
      }
    ];

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
              style={{ marginLeft: '5%', marginRight: '5%' }}
            >
              <Table.Body>
                {data.map(data_node => (
                  <Table.Row key={data_node.id} style={{ width: '100%' }}>
                    <Table.Cell>
                      <Accordion style={{ width: '100%' }}>
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
                                          {" "}
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
                                          {" "}
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
                            <div
                              style={{ marginLeft: '70px', marginTop: '20px' }}
                            >
                              <CommentSample />

                              <Form style={{ marginTop: '20px', width: '85%' }}>
                                <TextArea rows="2" placeholder="..." />
                                <div
                                  style={{
                                    marginTop: '10px',
                                    marginBottom: '35px'
                                  }}
                                >
                                  <Button
                                    positive
                                    content="Reply"
                                    size="small"
                                    className="pull-right"
                                  />
                                </div>
                              </Form>
                            </div>
                          </Accordion.Content>
                        </div>
                      </Accordion>
                    </Table.Cell>
                  </Table.Row>
                ))}

                <Table.Row>
                  <Table.Cell>
                    <Button
                      className="pull-right"
                      negative
                      style={{ marginTop: '20px', marginRight: '6%' }}
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
