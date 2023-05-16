/**
 * @generated SignedSource<<ed00db3ec2158740d1f5b5167079b942>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type demoItemQuery$variables = {
  id: string;
};
export type demoItemQuery$data = {
  readonly demoItem: {
    readonly description: string | null;
    readonly title: string | null;
  } | null;
};
export type demoItemQuery = {
  response: demoItemQuery$data;
  variables: demoItemQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
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
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "description",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "demoItemQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "demoItemQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "30dc7c69e0c4c0e2ab7ad65c460bd267",
    "id": null,
    "metadata": {},
    "name": "demoItemQuery",
    "operationKind": "query",
    "text": "query demoItemQuery(\n  $id: String!\n) {\n  demoItem(id: $id) {\n    title\n    description\n  }\n}\n"
  }
};
})();

(node as any).hash = "5b9918f68e8408f55a7c390ab8711834";

export default node;
