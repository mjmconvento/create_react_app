/**
 * @flow
 * @relayHash 6d48654d4ccfd0e414d1fbbb1bf8f48b
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreatePostMutationVariables = {|
  description?: ?string,
  imageUrl?: ?string,
|};
export type CreatePostMutationResponse = {|
  +createPost: ?{|
    +ok: ?boolean,
  |},
|};
*/


/*
mutation CreatePostMutation(
  $description: String
  $imageUrl: String
) {
  createPost(description: $description, imageUrl: $imageUrl) {
    ok
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "description",
    "type": "String",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "imageUrl",
    "type": "String",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "createPost",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "description",
        "variableName": "description",
        "type": "String"
      },
      {
        "kind": "Variable",
        "name": "imageUrl",
        "variableName": "imageUrl",
        "type": "String"
      }
    ],
    "concreteType": "createPost",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "ok",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "CreatePostMutation",
  "id": null,
  "text": "mutation CreatePostMutation(\n  $description: String\n  $imageUrl: String\n) {\n  createPost(description: $description, imageUrl: $imageUrl) {\n    ok\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "CreatePostMutation",
    "type": "MyMutations",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "CreatePostMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
(node/*: any*/).hash = 'bb83970d98f00389cc4a891985bd4829';
module.exports = node;
