import React, { Component } from "react";
import { Grid, Dimmer, Loader } from "semantic-ui-react";
import InboxData from './InboxData'
import { QueryRenderer, graphql } from "react-relay";
import environment from "../Environment";

const query_limit = 3;
const InboxDataQuery = graphql`
  query InboxQuery($like_message: String, $limit: Int) {
    ...InboxData_messages @arguments(likeMessage: $like_message, limit: $limit)
  }
`;


class Inbox extends Component {
  render() {
    return (
      <div>
        <div>Notifications</div>
        <br />
        <div>
          <QueryRenderer
            environment={environment}
            variables={{
              like_message: "",
              limit: query_limit,
            }}
            query={InboxDataQuery}
            render={({ error, props }) => {
              if (props) {
                return (
                  <div>
                      <InboxData query_limit={query_limit} messages={props} />
                  </div>
                );
              } else {
                return (
                  <Dimmer active>
                    <Loader>Loading</Loader>
                  </Dimmer>
                )
              }
            }}
          />

          <Grid>
            <Grid.Row>
              <Grid.Column width={16}>
                <center>See all</center>
              </Grid.Column>
            </Grid.Row>
          </Grid>


        </div>
      </div>
    );
  }
}

export default Inbox;
