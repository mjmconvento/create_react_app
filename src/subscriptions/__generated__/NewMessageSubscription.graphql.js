/**
 * @flow
 * @relayHash 50fda66142d4288b16979b0e12a1475b
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type NewMessageSubscriptionVariables = {| |};
export type NewMessageSubscriptionResponse = {|
  +countSeconds: ?number;
|};
*/


/*
subscription NewMessageSubscription {
  countSeconds(upTo: 5)
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "NewMessageSubscription",
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "args": [
          {
            "kind": "Literal",
            "name": "upTo",
            "value": 5,
            "type": "Int"
          }
        ],
        "name": "countSeconds",
        "storageKey": "countSeconds{\"upTo\":5}"
      }
    ],
    "type": "Subscription"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "NewMessageSubscription",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "NewMessageSubscription",
    "operation": "subscription",
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "args": [
          {
            "kind": "Literal",
            "name": "upTo",
            "value": 5,
            "type": "Int"
          }
        ],
        "name": "countSeconds",
        "storageKey": "countSeconds{\"upTo\":5}"
      }
    ]
  },
  "text": "subscription NewMessageSubscription {\n  countSeconds(upTo: 5)\n}\n"
};

module.exports = batch;
