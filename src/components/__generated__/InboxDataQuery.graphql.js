/**
 * @flow
 * @relayHash 8ead90c98af76fc7682db9ee1281b5c6
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type InboxDataQueryResponse = {|
  +allMessages: ?$ReadOnlyArray<?{| |}>;
|};
*/


/*
query InboxDataQuery(
  $like_message: String
) {
  allMessages(likeMessage: $like_message) {
    ...InboxData_messages_4vmyBK
    id
  }
}

fragment InboxData_messages_4vmyBK on Messages {
  id
  message
  createdAt
  updatedAt
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
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "InboxDataQuery",
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
          }
        ],
        "concreteType": "Messages",
        "name": "allMessages",
        "plural": true,
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
              }
            ]
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "InboxDataQuery",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "like_message",
        "type": "String",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "InboxDataQuery",
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
            "kind": "InlineFragment",
            "type": "Messages",
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
                "name": "createdAt",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "updatedAt",
                "storageKey": null
              }
            ]
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query InboxDataQuery(\n  $like_message: String\n) {\n  allMessages(likeMessage: $like_message) {\n    ...InboxData_messages_4vmyBK\n    id\n  }\n}\n\nfragment InboxData_messages_4vmyBK on Messages {\n  id\n  message\n  createdAt\n  updatedAt\n}\n"
};

module.exports = batch;
