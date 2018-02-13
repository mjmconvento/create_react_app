/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteFragment} from 'relay-runtime';
export type InboxData_messages = {|
  +allMessages: ?$ReadOnlyArray<?{|
    +message: ?string;
  |}>;
|};
*/


const fragment /*: ConcreteFragment*/ = {
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "likeMessage",
      "type": "String",
      "defaultValue": "s"
    },
    {
      "kind": "LocalArgument",
      "name": "limit",
      "type": "Int",
      "defaultValue": 10
    },
    {
      "kind": "RootArgument",
      "name": "like_message",
      "type": "String"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "InboxData_messages",
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
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
      "concreteType": "Messages",
      "name": "allMessages",
      "plural": true,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "args": null,
          "name": "message",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query"
};

module.exports = fragment;
