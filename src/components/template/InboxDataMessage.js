import React, { Component } from 'react';
import { Icon, Grid } from 'semantic-ui-react';
import { graphql, createFragmentContainer } from 'react-relay';
import Moment from 'react-moment';

class InboxDataMessage extends Component {
  render() {
    return (
      <Grid key={this.props.node.id}>
        <Grid.Row>
          <Grid.Column width={1}>
            <Icon name="reply" />
          </Grid.Column>
          <Grid.Column width={12}>
            <u>
              <Moment format="MM-DD-YYYY">{this.props.node.createdAt}</Moment>
            </u>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={1} />
          <Grid.Column width={12}>{this.props.node.message}</Grid.Column>
          <Grid.Column width={1}>
            <strong>...
            </strong>
          </Grid.Column>
        </Grid.Row>
      </Grid>
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


export default createFragmentContainer(
  InboxDataMessage,
  graphql`
    fragment InboxDataMessage_node on Messages {
      id
      message
    }
  `
);