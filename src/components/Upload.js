import React from "react";
import UploadFileMutation from "../mutations/UploadFileMutation";

class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this._uploadFile(this.fileInput.files[0]);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Upload file:
          <input
            type="file"
            ref={input => {
              this.fileInput = input;
            }}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    );
  }

  _uploadFile = file => {
    UploadFileMutation(file, () => console.log("Mutation Completed"));
  };
}

export default Upload;
