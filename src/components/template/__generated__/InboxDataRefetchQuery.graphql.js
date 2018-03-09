/**
 * @flow
 * @relayHash 386608464ca72713bbf775b93e85ee67
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type InboxDataMessage_message$ref = any;
export type InboxDataRefetchQueryVariables = {|
  like_message?: ?string,
  limit?: ?number,
|};
export type InboxDataRefetchQueryResponse = {|
  +allMessages: ?{|
    +edges: $ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +message: ?string,
        +createdAt: ?any,
        +$fragmentRefs: InboxDataMessage_message$ref,
      |},
    |}>,
  |},
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
],
v1 = [
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
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "message",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "createdAt",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "InboxDataRefetchQuery",
  "id": null,
  "text": "query InboxDataRefetchQuery(\n  $like_message: String\n  $limit: Int\n) {\n  allMessages(likeMessage: $like_message, limit: $limit) {\n    edges {\n      node {\n        id\n        message\n        createdAt\n        ...InboxDataMessage_message\n      }\n    }\n  }\n}\n\nfragment InboxDataMessage_message on Messages {\n  id\n  message\n  createdAt\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "InboxDataRefetchQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "allMessages",
        "storageKey": null,
        "args": v1,
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
                  v2,
                  v3,
                  v4,
                  {
                    "kind": "FragmentSpread",
                    "name": "InboxDataMessage_message",
                    "args": null
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "InboxDataRefetchQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "allMessages",
        "storageKey": null,
        "args": v1,
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
                  v2,
                  v3,
                  v4
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
(node/*: any*/).hash = 'b2a127f3ffac107dc406bca2efc7bfd5';
module.exports = node;
