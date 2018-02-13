import React, { Component } from "react";
import { Icon, Grid, Dimmer, Loader } from "semantic-ui-react";
import environment from "../Environment";
import { QueryRenderer, graphql, createFragmentContainer } from "react-relay";
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
          <Grid.Column width={14}>{this.props.node.message}</Grid.Column>
          <Grid.Column width={1}>
            <strong>...</strong>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default createFragmentContainer(
  InboxDataItem,
  graphql`
    fragment InboxDataItem_node on Messages {
      id
      message
    }
  `
);
