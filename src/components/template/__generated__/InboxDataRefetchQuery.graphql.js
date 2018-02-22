/**
 * @flow
 * @relayHash 3e295eaf01476f17f5820df49ec165bf
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type InboxDataRefetchQueryResponse = {|
  +allMessages: ?$ReadOnlyArray<?{|
    +id: string;
    +message: ?string;
  |}>;
|};
*/


/*
query InboxDataRefetchQuery(
  $like_message: String
  $limit: Int
) {
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
    "name": "InboxDataRefetchQuery",
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
            "kind": "FragmentSpread",
            "name": "InboxDataMessage_node",
            "args": null
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
  "name": "InboxDataRefetchQuery",
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
    "name": "InboxDataRefetchQuery",
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
  "text": "query InboxDataRefetchQuery(\n  $like_message: String\n  $limit: Int\n) {\n  allMessages(likeMessage: $like_message, limit: $limit) {\n    id\n    message\n    ...InboxDataMessage_node\n  }\n}\n\nfragment InboxDataMessage_node on Messages {\n  id\n  message\n}\n"
};

module.exports = batch;
