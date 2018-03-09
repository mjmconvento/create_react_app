/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from 'relay-runtime';
declare export opaque type InboxDataMessage_message$ref: FragmentReference;
export type InboxDataMessage_message = {|
  +id: string,
  +message: ?string,
  +createdAt: ?any,
  +$refType: InboxDataMessage_message$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "InboxDataMessage_message",
  "type": "Messages",
  "metadata": null,
  "argumentDefinitions": [],
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
};
(node/*: any*/).hash = '71f9d24d368c5912ec0fa9ba1f7efd05';
module.exports = node;
