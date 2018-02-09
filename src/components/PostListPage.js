import React, { Component } from "react";
import { QueryRenderer, graphql } from "react-relay";
import environment from "../Environment";
import { Link } from "react-router-dom";

const PostListPageQuery = graphql`
  query PostListPageQuery {
    allPosts {
      edges {
        node {
          id
          description
          imageUrl
        }
      }
    }
  }
`;

class PostListPage extends Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={PostListPageQuery}
        render={({ error, props }) => {
          if (error) {
            return <div>{error.message}</div>;
          } else if (props) {
            console.log(props);
            return (
              <div>
                {props.allPosts.edges.map(({ node }) => (
                  <div key={node.id}>
                    {node.id} - {node.imageUrl} - {node.description}
                    <div className="button" onClick={() => this._deletePost()}>
                      Delete
                    </div>
                    <br />
                  </div>
                ))}
                <Link to="/create">Create new post</Link>
                <br />
                <Link to="/upload">Upload</Link>
              </div>
            );
          }

          return <div>Loading</div>;
        }}
      />
    );
  }

  _deletePost = () => {
    alert("delete");
    // const {description, imageUrl} = this.state
    // CreatePostMutation(description, imageUrl, () => console.log('Mutation Completed'))
  };
}

export default PostListPage;
