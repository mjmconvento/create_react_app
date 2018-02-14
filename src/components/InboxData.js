import React, { Component } from "react";
import { Icon, Grid } from "semantic-ui-react";
import Moment from 'react-moment';
import InboxDataItem from './InboxDataItem'
import { QueryRenderer, graphql, createFragmentContainer } from "react-relay";


class InboxData extends Component {
  render() {
    return (
      <div>
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