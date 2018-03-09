/**
 * @flow
 * @relayHash 3c29905737c21190b565eb892b8ca2f0
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type InboxData_messages$ref = any;
export type InboxQueryVariables = {|
  like_message?: ?string,
  limit?: ?number,
|};
export type InboxQueryResponse = {|
  +$fragmentRefs: InboxData_messages$ref,
|};
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

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
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
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "InboxQuery",
  "id": null,
  "text": "query InboxQuery(\n  $like_message: String\n  $limit: Int\n) {\n  ...InboxData_messages_4aAQTj\n}\n\nfragment InboxData_messages_4aAQTj on Query {\n  allMessages(likeMessage: $like_message, limit: $limit) {\n    edges {\n      node {\n        id\n        message\n        createdAt\n        ...InboxDataMessage_message\n      }\n    }\n  }\n}\n\nfragment InboxDataMessage_message on Messages {\n  id\n  message\n  createdAt\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "InboxQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
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
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "InboxQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "allMessages",
        "storageKey": null,
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
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "MessagesEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "Messages",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "id",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "message",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "createdAt",
                    "args": null,
                    "storageKey": null
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
};
})();
(node/*: any*/).hash = '3593c84700c290af3a523530ebc02198';
module.exports = node;
