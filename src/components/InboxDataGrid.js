import React, { Component } from "react";
import { Icon, Grid, Dimmer, Loader, Button } from "semantic-ui-react";
import environment from "../Environment";
import { QueryRenderer, graphql, createRefetchContainer } from "react-relay";
import Moment from 'react-moment';



const RefetchableMessagesList = createRefetchContainer(
  InboxData,
  {
     messages: graphql`
       fragment InboxData_messages on Messages
       @argumentDefinitions(
         likeMessage: { type: String }
       ) {
        id
        message
        createdAt
        updatedAt
       }
     `
  },
  graphql`
    query InboxDataQuery($like_message: String) {
      messages(likeMessage: $like_message) {
        ...InboxData_messages @arguments(likeMessage: $like_message)
      }
    }
  `
);

class InboxDataGrid extends Component {
  render() {
            return (
              <div>
                {props.allMessages.map(( node ) => (
                  <Grid key={node.id}>
                    <Grid.Row>
                      <Grid.Column width={1}>
                        <Icon name='reply' />
                      </Grid.Column>
                      <Grid.Column width={15}>
                        <u>
                          <Moment format="MM-DD-YYYY">{node.createdAt}</Moment>
                        </u>
                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                      <Grid.Column width={1} />
                      <Grid.Column width={14}>
                        {node.message}
                      </Grid.Column>
                      <Grid.Column width={1}>
                        <strong>...</strong>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>

                ))}


                <Button onClick={() => props.relay.refetch((prev) => ({ like_message: 'ss' }))}>Refetch</Button>

              </div>
            );
  }
}

export default InboxDataGrid;
