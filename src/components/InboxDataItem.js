import React, { Component } from "react";
import { Icon, Grid, Dimmer, Loader } from "semantic-ui-react";
import environment from "../Environment";
import { QueryRenderer, graphql, createFragmentContainer, createRefetchContainer } from "react-relay";
import Moment from "react-moment";

class InboxDataItem extends Component {
  render() {
    return (
      <Grid key={this.props.node.id}>
        <Grid.Row>
          <Grid.Column width={1}>
            <Icon name="reply" />
          </Grid.Column>
          <Grid.Column width={15}>
            <u>
              <Moment format="MM-DD-YYYY">{this.props.node.createdAt}</Moment>
            </u>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={1} />
          <Grid.Column width={12}>{this.props.node.message}</Grid.Column>
          <Grid.Column width={3}>
            <strong>...
              {/* 
                <button relay={this.props.node} onClick={this._refetch}>Refetch</button> 
              */}
            </strong>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }

 _refetch = () => {
  console.log(this)
    this.props.relay.refetch(
      {like_message: ''},  // Our refetchQuery needs to know the `itemID`
      {first: 1},  // We can use the refetchVariables as renderVariables
      (error) => { console.log("refetching done") },
      {force: true},  // Assuming we've configured a network layer cache, we want to ensure we fetch the latest data.
    );
  }

}

// export default createFragmentContainer(
//   InboxDataItem,
//   graphql`
//     fragment InboxDataItem_node on Messages {
//       id
//       message
//     }
//   `
// );


export default createRefetchContainer(
  InboxDataItem,
  graphql`
    fragment InboxDataItem_node on Messages {
      id
      message
    }
  `,
  graphql`
    query InboxDataItemRefetchQuery($like_message: String, $limit: Int) {
      allMessages(likeMessage: $like_message, limit: $limit) {
        id
        message
        createdAt
        updatedAt
        ...InboxDataItem_node
      }
    }
  `
);