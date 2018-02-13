/**
 * @flow
 * @relayHash b231c090f824ed3aac6e7f8626d648c4
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type InboxDataPageQueryResponse = {| |};
*/


/*
query InboxDataPageQuery(
  $like_message: String
  $limit: Int
) {
  ...InboxData_messages_4aAQTj
}

fragment InboxData_messages_4aAQTj on Query {
  allMessages(likeMessage: $like_message, limit: $limit) {
    message
    id
  }
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
    "name": "InboxDataPageQuery",
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
  "name": "InboxDataPageQuery",
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
    "name": "InboxDataPageQuery",
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
            "name": "message",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query InboxDataPageQuery(\n  $like_message: String\n  $limit: Int\n) {\n  ...InboxData_messages_4aAQTj\n}\n\nfragment InboxData_messages_4aAQTj on Query {\n  allMessages(likeMessage: $like_message, limit: $limit) {\n    message\n    id\n  }\n}\n"
};

module.exports = batch;
