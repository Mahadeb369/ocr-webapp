/**
 * @generated SignedSource<<21c77b152407f486e38da35f98431a55>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type demoItemsAllQuery$variables = {};
export type demoItemsAllQuery$data = {
  readonly demoItemCollection: {
    readonly items: ReadonlyArray<{
      readonly sys: {
        readonly id: string;
      };
      readonly " $fragmentSpreads": FragmentRefs<"demoItemListItem_item">;
    } | null>;
  } | null;
};
export type demoItemsAllQuery = {
  response: demoItemsAllQuery$data;
  variables: demoItemsAllQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "concreteType": "Sys",
  "kind": "LinkedField",
  "name": "sys",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    }
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "demoItemsAllQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "DemoItemCollection",
        "kind": "LinkedField",
        "name": "demoItemCollection",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "DemoItem",
            "kind": "LinkedField",
            "name": "items",
            "plural": true,
            "selections": [
              (v0/*: any*/),
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "demoItemListItem_item"
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "demoItemsAllQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "DemoItemCollection",
        "kind": "LinkedField",
        "name": "demoItemCollection",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "DemoItem",
            "kind": "LinkedField",
            "name": "items",
            "plural": true,
            "selections": [
              (v0/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "title",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "b3f7ffcd06d20116736c4fe38e7dba44",
    "id": null,
    "metadata": {},
    "name": "demoItemsAllQuery",
    "operationKind": "query",
    "text": "query demoItemsAllQuery {\n  demoItemCollection {\n    items {\n      sys {\n        id\n      }\n      ...demoItemListItem_item\n    }\n  }\n}\n\nfragment demoItemListItem_item on DemoItem {\n  title\n}\n"
  }
};
})();

(node as any).hash = "d9cef872a59cb0f9307c7d0623cecce8";

export default node;
