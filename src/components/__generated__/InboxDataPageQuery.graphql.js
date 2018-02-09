/**
 * @flow
 * @relayHash fefeb7a61f9fbdf1fef41287a5e8b964
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type InboxDataPageQueryResponse = {|
  +allMessages: ?{|
    +edges: $ReadOnlyArray<?{|
      +node: ?{|
        +id: string;
        +message: ?string;
        +createdAt: ?any;
        +updatedAt: ?any;
      |};
    |}>;
  |};
|};
*/


/*
query InboxDataPageQuery(
  $first: Int
) {
  allMessages(first: $first) {
    edges {
      node {
        id
        message
        createdAt
        updatedAt
      }
    }
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "first",
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
            "name": "first",
            "variableName": "first",
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
        "name": "first",
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
            "name": "first",
            "variableName": "first",
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
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query InboxDataPageQuery(\n  $first: Int\n) {\n  allMessages(first: $first) {\n    edges {\n      node {\n        id\n        message\n        createdAt\n        updatedAt\n      }\n    }\n  }\n}\n"
};

module.exports = batch;
