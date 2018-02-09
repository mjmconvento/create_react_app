/**
 * @flow
 * @relayHash 7b055159e64f220aa17bc60284eaf491
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type InboxDataPageQueryResponse = {|
  +allMessages: ?$ReadOnlyArray<?{|
    +id: string;
    +message: ?string;
    +createdAt: ?any;
    +updatedAt: ?any;
  |}>;
|};
*/


/*
query InboxDataPageQuery(
  $like_message: String
  $limit: Int
) {
  allMessages(likeMessage: $like_message, limit: $limit) {
    id
    message
    createdAt
    updatedAt
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
        ],
        "storageKey": null
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
            "name": "id",
            "storageKey": null
          },
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
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query InboxDataPageQuery(\n  $like_message: String\n  $limit: Int\n) {\n  allMessages(likeMessage: $like_message, limit: $limit) {\n    id\n    message\n    createdAt\n    updatedAt\n  }\n}\n"
};

module.exports = batch;
