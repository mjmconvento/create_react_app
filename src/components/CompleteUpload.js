import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom'
import {
    QueryRenderer,
    graphql
} from 'react-relay'
import environment from '../Environment'
import UploadFileMutation from '../mutations/UploadFileMutation'

class CompleteUpload extends React.Component {
    
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(
            this
        );
    }
    
    handleSubmit(event) {
        event.preventDefault();
        this._uploadFile(this.fileInput.files[0]);
    }

    render() {
        return (
            <form
                onSubmit={this.handleSubmit}>
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
                <button className="ui button" type="submit"
                >
                    Submit
                </button>
            </form>
        );
    }

    _uploadFile = (file) => {
        UploadFileMutation(file, () => console.log('Mutation Completed'))
    }


}

export default CompleteUpload