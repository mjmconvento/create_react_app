/**
 * @flow
 * @relayHash 52036b57d1d04c661e7dff43feb2f2ec
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type PostListPageQueryVariables = {| |};
export type PostListPageQueryResponse = {|
  +allPosts: ?{|
    +edges: $ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +description: ?string,
        +imageUrl: ?string,
      |},
    |}>,
  |},
|};
*/


/*
query PostListPageQuery {
  allPosts {
    edges {
      node {
        id
        description
        imageUrl
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "allPosts",
    "storageKey": null,
    "args": null,
    "concreteType": "PostsConnection",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "edges",
        "storageKey": null,
        "args": null,
        "concreteType": "PostsEdge",
        "plural": true,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "node",
            "storageKey": null,
            "args": null,
            "concreteType": "Posts",
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
                "name": "description",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "imageUrl",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "PostListPageQuery",
  "id": null,
  "text": "query PostListPageQuery {\n  allPosts {\n    edges {\n      node {\n        id\n        description\n        imageUrl\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "PostListPageQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": v0
  },
  "operation": {
    "kind": "Operation",
    "name": "PostListPageQuery",
    "argumentDefinitions": [],
    "selections": v0
  }
};
})();
(node/*: any*/).hash = 'd68da92f03a296d64bc4d16fb5737c4b';
module.exports = node;
