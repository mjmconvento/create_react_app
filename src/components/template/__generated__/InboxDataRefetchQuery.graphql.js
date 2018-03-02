/**
 * @flow
 * @relayHash 27b9f5324aa62eec71044c84679cde65
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type InboxDataRefetchQueryResponse = {|
  +allMessages: ?{|
    +edges: $ReadOnlyArray<?{|
      +node: ?{|
        +id: string;
        +message: ?string;
        +createdAt: ?any;
      |};
    |}>;
  |};
|};
*/


/*
query InboxDataRefetchQuery(
  $like_message: String
  $limit: Int
) {
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

fragment InboxDataMessage_message on Messages {
  id
  message
  createdAt
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
        "concreteType": "MessagesConnection",
        "name": "allMessages",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "MessagesEdge",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "Messages",
                "name": "node",
                "plural": false,
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
                    "kind": "FragmentSpread",
                    "name": "InboxDataMessage_message",
                    "args": null
                  }
                ],
                "storageKey": null
              }
            ],
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
        "concreteType": "MessagesConnection",
        "name": "allMessages",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "MessagesEdge",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "Messages",
                "name": "node",
                "plural": false,
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
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query InboxDataRefetchQuery(\n  $like_message: String\n  $limit: Int\n) {\n  allMessages(likeMessage: $like_message, limit: $limit) {\n    edges {\n      node {\n        id\n        message\n        createdAt\n        ...InboxDataMessage_message\n      }\n    }\n  }\n}\n\nfragment InboxDataMessage_message on Messages {\n  id\n  message\n  createdAt\n}\n"
};

module.exports = batch;
