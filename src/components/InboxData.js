import React, { Component } from "react";
import { Icon, Grid, Dimmer, Loader } from "semantic-ui-react";
import environment from "../Environment";
import { QueryRenderer, graphql } from "react-relay";


const InboxDataQuery = graphql`
  query InboxDataPageQuery($like_message: String, $limit: Int) {
    allMessages(likeMessage: $like_message, limit: $limit) {
      id
      message
      createdAt
      updatedAt
    }
  }
`;


class InboxData extends Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        variables={{
          like_message: "",
          limit: 4,
        }}
        query={InboxDataQuery}
        render={({ error, props }) => {
          if (error) {
            return (
              <Dimmer active>
                <Loader>Loading</Loader>
              </Dimmer>
            )
          } else if (props) {
            console.log(props);
            console.log(InboxDataQuery);
            return (
              <div>
                {props.allMessages.map(( node ) => (

                  <Grid key={node.id}>
                    <Grid.Row>
                      <Grid.Column width={1}>
                        <Icon name='reply' />
                      </Grid.Column>
                      <Grid.Column width={15}>
                        <u>{node.createdAt}</u>
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




              </div>
            );
          }

            return (
              <Dimmer active>
                <Loader>Loading</Loader>
              </Dimmer>

            )
        }}
      />


    );
  }
}

export default InboxData;
