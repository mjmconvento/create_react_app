/**
 * @flow
 * @relayHash d030d55e568ef42ac4d685109ed28356
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type NewMessageSubscriptionVariables = {| |};
export type NewMessageSubscriptionResponse = {|
  +countSeconds: ?number,
|};
*/


/*
subscription NewMessageSubscription {
  countSeconds(upTo: 5)
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "countSeconds",
    "args": [
      {
        "kind": "Literal",
        "name": "upTo",
        "value": 5,
        "type": "Int"
      }
    ],
    "storageKey": "countSeconds(upTo:5)"
  }
];
return {
  "kind": "Request",
  "operationKind": "subscription",
  "name": "NewMessageSubscription",
  "id": null,
  "text": "subscription NewMessageSubscription {\n  countSeconds(upTo: 5)\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "NewMessageSubscription",
    "type": "Subscription",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": v0
  },
  "operation": {
    "kind": "Operation",
    "name": "NewMessageSubscription",
    "argumentDefinitions": [],
    "selections": v0
  }
};
})();
(node/*: any*/).hash = 'b147e4fed066160cda0dd77778da5b79';
module.exports = node;
