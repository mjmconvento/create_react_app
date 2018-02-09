import React, { Component } from "react";
import CreatePostMutation from "../mutations/CreatePostMutation";

class CreatePost extends Component {
  state = {
    description: "",
    imageUrl: ""
  };

  render() {
    return (
      <div>
        <div className="flex flex-column mt3">
          <input
            className="mb2"
            value={this.state.description}
            onChange={e => this.setState({ description: e.target.value })}
            type="text"
            placeholder="A description for the post"
          />
          <input
            className="mb2"
            value={this.state.imageUrl}
            onChange={e => this.setState({ imageUrl: e.target.value })}
            type="text"
            placeholder="The URL for the post"
          />
        </div>
        <div className="button" onClick={() => this._createPost()}>
          {" "}
          Submit
        </div>
      </div>
    );
  }

  _createPost = () => {
    const { description, imageUrl } = this.state;
    CreatePostMutation(description, imageUrl, () =>
      console.log("Mutation Completed")
    );
  };
}

export default CreatePost;
