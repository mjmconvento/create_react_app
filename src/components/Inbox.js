import React, { Component } from "react";
import { Grid, Dimmer, Loader } from "semantic-ui-react";
import InboxData from './InboxData'
import { QueryRenderer, graphql } from "react-relay";
import environment from "../Environment";

const InboxDataQuery = graphql`
  query InboxQuery($like_message: String, $limit: Int) {
    ...InboxData_messages @arguments(likeMessage: $like_message, limit: $limit)
  }
`;

// const InboxDataQuery = graphql`
//   query InboxDataPageQuery {
//     allMessages {
//       ...InboxDataFragment
//     }
//   }
// `;

class Inbox extends Component {
  render() {

    return (
      <div>
        <div>My Inbox</div>
        <br />
        <div>
          <QueryRenderer
            environment={environment}
            variables={{
              like_message: "",
              limit: 10,
            }}
            query={InboxDataQuery}
            render={({ error, props }) => {
              console.log(props)
              if (error) {
                return (
                  <Dimmer active>
                    <Loader>Loading</Loader>
                  </Dimmer>
                )
              } else if (props) {

                return (
                  <div>
                      <InboxData messages={props} />
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
