import React, { Component } from "react";
import { Button, Progress } from "semantic-ui-react";
import Dropzone from "react-dropzone";
import UploadFileMutation from "../../mutations/UploadFileMutation";

class ModalDropzone extends Component {
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
    const activeStyle = {
      opacity: ".7"
    };

    return (
      <Dropzone
        onDrop={this.onDrop.bind(this)}
        onDropAccepted={this.onDropAccepted.bind(this)}
        activeStyle={activeStyle}
        className="dropzone-style"
        disabled={this.state.disabledDropdown}
      >
        {({ isDragActive }) => {
          let activeStyle = isDragActive ? "active-opacity" : "";

          if (this.state.uploaded) {
            return (
              <div className="progress-bar-margin">
                <center>
                  File successfully uploaded:{" "}
                  <strong>{this.state.fileUploaded}</strong>
                </center>
                <Progress percent={this.state.percent} indicating />
              </div>
            );
          }

          return (
            <div>
              <center className={activeStyle}>
                <div className="dropzone-text-margin">Drag file here or</div>
                <div>
                  <Button content="Browse" />
                </div>
              </center>
            </div>
          );
        }}
      </Dropzone>
    );
  }
}

export default ModalDropzone;
