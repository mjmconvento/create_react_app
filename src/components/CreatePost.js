import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom'

class CreatePost extends Component {
    render() {
        return (
            <div>
                CreatePost
                <div>
                    <Link to="/">Back</Link>
                </div>
            </div>
        );
    }
}

export default CreatePost; 