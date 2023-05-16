/**
 * @generated SignedSource<<8d58ef934176de16a5ff4591dd116913>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type browseHistoryItemListQuery$variables = {};
export type browseHistoryItemListQuery$data = {
  readonly browseHistoryItems: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly actualId: string | null;
        readonly base64Data: string | null;
        readonly createdAt: String;
        readonly id: string;
      } | null;
    } | null>;
  } | null;
};
export type browseHistoryItemListQuery = {
  response: browseHistoryItemListQuery$data;
  variables: browseHistoryItemListQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "BrowseHistoryEdge",
    "kind": "LinkedField",
    "name": "edges",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "BrowseHistoryType",
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "base64Data",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "createdAt",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "actualId",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "cursor",
        "storageKey": null
      }
    ],
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "concreteType": "PageInfo",
    "kind": "LinkedField",
    "name": "pageInfo",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "endCursor",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "hasNextPage",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
],
v1 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 100
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "browseHistoryItemListQuery",
    "selections": [
      {
        "alias": "browseHistoryItems",
        "args": null,
        "concreteType": "BrowseHistoryConnection",
        "kind": "LinkedField",
        "name": "__browseHistoryItemList_browseHistoryItems_connection",
        "plural": false,
        "selections": (v0/*: any*/),
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
    "name": "browseHistoryItemListQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "BrowseHistoryConnection",
        "kind": "LinkedField",
        "name": "browseHistoryItems",
        "plural": false,
        "selections": (v0/*: any*/),
        "storageKey": "browseHistoryItems(first:100)"
      },
      {
        "alias": null,
        "args": (v1/*: any*/),
        "filters": null,
        "handle": "connection",
        "key": "browseHistoryItemList_browseHistoryItems",
        "kind": "LinkedHandle",
        "name": "browseHistoryItems"
      }
    ]
  },
  "params": {
    "cacheID": "a335a8015e5c3a13ece0d8967d8ec81e",
    "id": null,
    "metadata": {
      "connection": [
        {
          "count": null,
          "cursor": null,
          "direction": "forward",
          "path": [
            "browseHistoryItems"
          ]
        }
      ]
    },
    "name": "browseHistoryItemListQuery",
    "operationKind": "query",
    "text": "query browseHistoryItemListQuery {\n  browseHistoryItems(first: 100) {\n    edges {\n      node {\n        id\n        base64Data\n        createdAt\n        actualId\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "964b95647a139ba737a5c6652923e400";

export default node;
