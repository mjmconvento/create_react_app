import React, { Component } from "react";
import { Grid, Search, Dropdown, Dimmer, Loader } from "semantic-ui-react";
import InboxData from './InboxData'
import { QueryRenderer, graphql } from "react-relay";
import environment from "../Environment";

const InboxDataQuery = graphql`
  query InboxDataPageQuery($like_message: String, $limit: Int) {
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

    const selectOptions = [ 
      { 
        key: 1, 
        value: 'opt_1', 
        text: 'Option 1' 
      },
      { 
        key: 2, 
        value: 'opt_2', 
        text: 'Option 2'
      },
    ]

    return (
      <div>
        <div>My Inbox</div>
        <br />
        <div>
          
          <Grid>
            <Grid.Row>
              <Grid.Column width={8}>
                <Search />
              </Grid.Column>
              <Grid.Column width={8}>
                <Dropdown placeholder="Select Friend" fluid selection options={selectOptions} />
              </Grid.Column>
            </Grid.Row>
          </Grid>


          <QueryRenderer
            environment={environment}
            variables={{
              like_message: "s",
              limit: 4,
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
