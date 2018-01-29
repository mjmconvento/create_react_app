/**
 * @flow
 * @relayHash 2e94506de17a301fded4a07371f1538e
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type CreatePostMutationVariables = {|
  description?: ?string;
  imageUrl?: ?string;
|};
export type CreatePostMutationResponse = {|
  +createPost: ?{|
    +ok: ?boolean;
  |};
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

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
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
    "kind": "Fragment",
    "metadata": null,
    "name": "CreatePostMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
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
        "concreteType": "CreatePost",
        "name": "createPost",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "ok",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "MyMutations"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "CreatePostMutation",
  "query": {
    "argumentDefinitions": [
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
    "kind": "Root",
    "name": "CreatePostMutation",
    "operation": "mutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
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
        "concreteType": "CreatePost",
        "name": "createPost",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "ok",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "mutation CreatePostMutation(\n  $description: String\n  $imageUrl: String\n) {\n  createPost(description: $description, imageUrl: $imageUrl) {\n    ok\n  }\n}\n"
};

module.exports = batch;
