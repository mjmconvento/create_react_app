import React, { Component } from 'react';
import { Grid, Search, Dropdown } from 'semantic-ui-react';
import InboxDataMessage from './InboxDataMessage'
import { graphql, createRefetchContainer } from 'react-relay';
import NewMessageSubscription from '../../subscriptions/NewMessageSubscription'


class InboxData extends Component {

  componentDidMount() {
    NewMessageSubscription()
  }

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
        <Grid>
          <Grid.Row>
            <Grid.Column width={6}>
              <Search showNoResults={false} onKeyPress={e => this._refetch(e)} />
            </Grid.Column>
            <Grid.Column width={3}>
            </Grid.Column>
            <Grid.Column width={7}>
              <Dropdown placeholder="-- Select --" fluid selection options={selectOptions} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        
        {this.props.messages.allMessages.edges.map(( node ) => (
          <InboxDataMessage key={node.node.__id} message={node.node} />
        ))}

      </div>
    );      
  }

 _refetch = (e) => {
    if (e.nativeEvent.keyCode === 13) {
      this.props.relay.refetch(
        {
          like_message: e.target.value, 
          limit: this.props.query_limit
        }, // arguments
        null, // render variables
        () => { console.log("refetching done") }, // callback
        {force: true},  // Assuming we've configured a network layer cache, we want to ensure we fetch the latest data.
      );

    }
  }
}

export default createRefetchContainer(InboxData, graphql`
  fragment InboxData_messages on Query @argumentDefinitions(
  likeMessage: {type: "String"},
  limit: {type: "Int"},
){
    allMessages(likeMessage: $like_message, limit: $limit) {
      edges {
        node {
          id
          message
          createdAt
          ...InboxDataMessage_message          
        }
      }

    }

  }
`,
  graphql`
    query InboxDataRefetchQuery($like_message: String, $limit: Int) {
      allMessages(likeMessage: $like_message, limit: $limit) {
        edges {
          node {
            id
            message
            createdAt
            ...InboxDataMessage_message          
          }
        }
      }
    }
`);