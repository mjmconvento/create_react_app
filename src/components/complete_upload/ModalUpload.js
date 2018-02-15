import React, { Component } from "react";
import {
  Icon,
  Grid,
  Table,
  Modal,
  Button,
  Image,
  Progress
} from "semantic-ui-react";
import xls_image from "./images/xls.png";
import Dropzone from "react-dropzone";
import UploadFileMutation from "../../mutations/UploadFileMutation";

class ModalUpload extends Component {
  constructor() {
    super();
    this.state = {
      disabledDropdown: false,
      activeOpacity: "",
      percent: 0,
      uploaded: false,
      fileUploaded: ""
    };
  }

  onDrop(files) {
    UploadFileMutation(files[0], () => console.log("Mutation Completed"));

    // transfer this after upload or mutation completed
    this.setState({ 
      percent: 100,
      uploaded: true,
      fileUploaded: files[0].name
    });
  }

  onDropAccepted() {
    this.setState({
      disabledDropdown: true
    });
  }

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

    const activeStyle = {
      opacity: ".7"
    };

    return (
      <Modal trigger={<u>Upload report</u>}>
        <Modal.Header>Upload Report - Texas Nursing Home</Modal.Header>
        <Modal.Content>
          <Dropzone
            onDrop={this.onDrop.bind(this)}
            onDropAccepted={this.onDropAccepted.bind(this)}
            activeStyle={activeStyle}
            className="dropzone-style"
            disabled={this.state.disabledDropdown}
          >
            {({ isDragActive, isDragReject, acceptedFiles, rejectedFiles }) => {
              let activeStyle = isDragActive ? 'active-opacity' : '';

              if (this.state.uploaded) {
                return (
                  <div className="progress-bar-margin">
                    <center>File successfully uploaded: <strong>{this.state.fileUploaded}</strong></center>
                    <Progress percent={this.state.percent} indicating />
                  </div>
                )
              }

              return (
                <div>
                  <center className={activeStyle}>
                    <div className="dropzone-text-margin">
                      Drag file here or
                    </div>
                    <div>
                      <Button content="Browse" />
                    </div>
                  </center>
                </div>
              )

            }}
          </Dropzone>

          <Table celled padded>
            <Table.Body>
              {data.map(data_node => (
                <Table.Row key={data_node.id}>
                  <Table.Cell>
                    <Grid>
                      <Grid.Row>
                        <Grid.Column width={2}>
                          <Image src={xls_image} size="small" />
                        </Grid.Column>
                        <Grid.Column width={10}>
                          <div>{data_node.filename}</div>
                          <div>{data_node.date_uploaded}</div>
                        </Grid.Column>
                        <Grid.Column width={4}>
                          {data_node.is_draft ? (
                            <div>
                              <div>
                                Status:
                                <span className="text-blue">Draft</span>
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
                                <Icon name="trash" size="big" />
                              </div>
                            </div>
                          )}
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
          <Button positive>Ok</Button>
          <Button negative>Cancel</Button>
        </Modal.Content>
      </Modal>
    );
  }
}

export default ModalUpload;
