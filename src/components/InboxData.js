import React, { Component } from "react";
import { Icon, Grid, Search, Dropdown } from "semantic-ui-react";
import Moment from 'react-moment';
import InboxDataItem from './InboxDataItem'
import { QueryRenderer, graphql, createFragmentContainer } from "react-relay";

class InboxData extends Component {
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
            <Grid.Column width={8}>
              <Search />
            </Grid.Column>
            <Grid.Column width={8}>
              <Dropdown placeholder="Select Friend" fluid selection options={selectOptions} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        
        {this.props.messages.allMessages.map(( node ) => (
          <InboxDataItem key={node.id} node={node} />
        ))}
      </div>
    );      
  }
}

// export default InboxData;

// export default createFragmentContainer(InboxData, graphql`
//   fragment InboxData_messages on Query {
//     allMessages {
//       ...InboxDataItem_node
//     }

//   }
// `)


export default createFragmentContainer(InboxData, graphql`
  fragment InboxData_messages on Query @argumentDefinitions(
  likeMessage: {type: "String"},
  limit: {type: "Int"},
){
    allMessages(likeMessage: $like_message, limit: $limit) {
      id
      message
      ...InboxDataItem_node
    }

  }
`)