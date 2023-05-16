/**
 * @generated SignedSource<<f512587f910f0cd5a662aa7c2885a9fc>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type demoItemListItem_item$data = {
  readonly title: string | null;
  readonly " $fragmentType": "demoItemListItem_item";
};
export type demoItemListItem_item$key = {
  readonly " $data"?: demoItemListItem_item$data;
  readonly " $fragmentSpreads": FragmentRefs<"demoItemListItem_item">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "demoItemListItem_item",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "title",
      "storageKey": null
    }
  ],
  "type": "DemoItem",
  "abstractKey": null
};

(node as any).hash = "55d0df3b747c5671946d1223e9bd3cd5";

export default node;
