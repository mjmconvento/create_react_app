/**
 * @flow
 * @relayHash 86c9e8ce3aab5ba0955be7cb4b5fb951
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type UploadFileMutationVariables = {|
  file?: ?any;
|};
export type UploadFileMutationResponse = {|
  +uploadFile: ?{|
    +ok: ?boolean;
  |};
|};
*/


/*
mutation UploadFileMutation(
  $file: Upload
) {
  uploadFile(file: $file) {
    ok
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "file",
        "type": "Upload",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "UploadFileMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "file",
            "variableName": "file",
            "type": "Upload"
          }
        ],
        "concreteType": "UploadFile",
        "name": "uploadFile",
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
  "name": "UploadFileMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "file",
        "type": "Upload",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "UploadFileMutation",
    "operation": "mutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "file",
            "variableName": "file",
            "type": "Upload"
          }
        ],
        "concreteType": "UploadFile",
        "name": "uploadFile",
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
  "text": "mutation UploadFileMutation(\n  $file: Upload\n) {\n  uploadFile(file: $file) {\n    ok\n  }\n}\n"
};

module.exports = batch;
