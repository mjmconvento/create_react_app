/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type InboxDataMessage_message$ref = any;
import type { FragmentReference } from 'relay-runtime';
declare export opaque type InboxData_messages$ref: FragmentReference;
export type InboxData_messages = {|
  +allMessages: ?{|
    +edges: $ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +message: ?string,
        +createdAt: ?any,
        +$fragmentRefs: InboxDataMessage_message$ref,
      |},
    |}>,
  |},
  +$refType: InboxData_messages$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "InboxData_messages",
  "type": "Query",
  "metadata": null,
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
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "allMessages",
      "storageKey": null,
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
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "edges",
          "storageKey": null,
          "args": null,
          "concreteType": "MessagesEdge",
          "plural": true,
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "node",
              "storageKey": null,
              "args": null,
              "concreteType": "Messages",
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
                },
                {
                  "kind": "FragmentSpread",
                  "name": "InboxDataMessage_message",
                  "args": null
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
(node/*: any*/).hash = '749f55495cb9635424abd396184b3c0f';
module.exports = node;
