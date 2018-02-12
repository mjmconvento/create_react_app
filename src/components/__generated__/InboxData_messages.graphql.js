/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteFragment} from 'relay-runtime';
export type InboxData_messages = {|
  +id: string;
  +message: ?string;
  +createdAt: ?any;
  +updatedAt: ?any;
|};
*/


const fragment /*: ConcreteFragment*/ = {
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "likeMessage",
      "type": "String",
      "defaultValue": null
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "InboxData_messages",
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
  "type": "Messages"
};

module.exports = fragment;
