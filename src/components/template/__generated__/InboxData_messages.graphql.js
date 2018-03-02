/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteFragment} from 'relay-runtime';
export type InboxData_messages = {|
  +allMessages: ?{|
    +edges: $ReadOnlyArray<?{|
      +node: ?{|
        +id: string;
        +message: ?string;
        +createdAt: ?any;
      |};
    |}>;
  |};
|};
*/


const fragment /*: ConcreteFragment*/ = {
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "likeMessage",
      "type": "String",
      "defaultValue": null
    },
    {
      "kind": "LocalArgument",
      "name": "limit",
      "type": "Int",
      "defaultValue": null
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
      "concreteType": "MessagesConnection",
      "name": "allMessages",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "args": null,
          "concreteType": "MessagesEdge",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "args": null,
              "concreteType": "Messages",
              "name": "node",
              "plural": false,
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
                  "kind": "FragmentSpread",
                  "name": "InboxDataMessage_message",
                  "args": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query"
};

module.exports = fragment;
