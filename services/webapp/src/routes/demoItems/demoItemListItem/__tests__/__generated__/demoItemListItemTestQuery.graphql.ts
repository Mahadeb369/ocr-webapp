/**
 * @generated SignedSource<<a9c67f5094fde698dea64c2f091a86f0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type demoItemListItemTestQuery$variables = {};
export type demoItemListItemTestQuery$data = {
  readonly testItem: {
    readonly " $fragmentSpreads": FragmentRefs<"demoItemListItem_item">;
  } | null;
};
export type demoItemListItemTestQuery = {
  response: demoItemListItemTestQuery$data;
  variables: demoItemListItemTestQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "contentful-item-1"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "demoItemListItemTestQuery",
    "selections": [
      {
        "alias": "testItem",
        "args": (v0/*: any*/),
        "concreteType": "DemoItem",
        "kind": "LinkedField",
        "name": "demoItem",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "demoItemListItem_item"
          }
        ],
        "storageKey": "demoItem(id:\"contentful-item-1\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "demoItemListItemTestQuery",
    "selections": [
      {
        "alias": "testItem",
        "args": (v0/*: any*/),
        "concreteType": "DemoItem",
        "kind": "LinkedField",
        "name": "demoItem",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "title",
            "storageKey": null
          }
        ],
        "storageKey": "demoItem(id:\"contentful-item-1\")"
      }
    ]
  },
  "params": {
    "cacheID": "86873537730462de256e97217b4b3e4e",
    "id": null,
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "testItem": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "DemoItem"
        },
        "testItem.title": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "String"
        }
      }
    },
    "name": "demoItemListItemTestQuery",
    "operationKind": "query",
    "text": "query demoItemListItemTestQuery {\n  testItem: demoItem(id: \"contentful-item-1\") {\n    ...demoItemListItem_item\n  }\n}\n\nfragment demoItemListItem_item on DemoItem {\n  title\n}\n"
  }
};
})();

(node as any).hash = "bbd4ba26c34d42d197c8d1c03ef69b26";

export default node;
