/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteFragment} from 'relay-runtime';
export type InboxDataMessage_message = {|
  +id: string;
  +message: ?string;
  +createdAt: ?any;
|};
*/


const fragment /*: ConcreteFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "InboxDataMessage_message",
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
  "type": "Messages"
};

module.exports = fragment;
