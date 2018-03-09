/**
 * @flow
 * @relayHash 707c0aa8bd2c2893e1cb8389f8c04c5d
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UploadFileMutationVariables = {|
  file?: ?any,
|};
export type UploadFileMutationResponse = {|
  +uploadFile: ?{|
    +ok: ?boolean,
  |},
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

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "file",
    "type": "Upload",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "uploadFile",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "file",
        "variableName": "file",
        "type": "Upload"
      }
    ],
    "concreteType": "UploadFile",
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
  "name": "UploadFileMutation",
  "id": null,
  "text": "mutation UploadFileMutation(\n  $file: Upload\n) {\n  uploadFile(file: $file) {\n    ok\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "UploadFileMutation",
    "type": "MyMutations",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "UploadFileMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
(node/*: any*/).hash = '81a983281ac153ee435792841cd94aa6';
module.exports = node;
