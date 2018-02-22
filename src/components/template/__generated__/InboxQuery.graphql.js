/**
 * @flow
 * @relayHash 255faa4e2b4fcbcc5f4f1b1ccfa11fed
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type InboxQueryResponse = {| |};
*/


/*
query InboxQuery(
  $like_message: String
  $limit: Int
) {
  ...InboxData_messages_4aAQTj
}

fragment InboxData_messages_4aAQTj on Query {
  allMessages(likeMessage: $like_message, limit: $limit) {
    id
    message
    ...InboxDataMessage_node
  }
}

fragment InboxDataMessage_node on Messages {
  id
  message
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "like_message",
        "type": "String",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "limit",
        "type": "Int",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "InboxQuery",
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "InboxData_messages",
        "args": [
          {
            "kind": "Variable",
            "name": "likeMessage",
            "variableName": "like_message",
            "type": null
          },
          {
            "kind": "Variable",
            "name": "limit",
            "variableName": "limit",
            "type": null
          }
        ]
      }
    ],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "InboxQuery",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "like_message",
        "type": "String",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "limit",
        "type": "Int",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "InboxQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "likeMessage",
            "variableName": "like_message",
            "type": "String"
          },
          {
            "kind": "Variable",
            "name": "limit",
            "variableName": "limit",
            "type": "Int"
          }
        ],
        "concreteType": "Messages",
        "name": "allMessages",
        "plural": true,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "id",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "message",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query InboxQuery(\n  $like_message: String\n  $limit: Int\n) {\n  ...InboxData_messages_4aAQTj\n}\n\nfragment InboxData_messages_4aAQTj on Query {\n  allMessages(likeMessage: $like_message, limit: $limit) {\n    id\n    message\n    ...InboxDataMessage_node\n  }\n}\n\nfragment InboxDataMessage_node on Messages {\n  id\n  message\n}\n"
};

module.exports = batch;
