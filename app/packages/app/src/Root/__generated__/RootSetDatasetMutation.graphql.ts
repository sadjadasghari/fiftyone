/**
 * @generated SignedSource<<d09b24a21b1a5cb8b220659b9af3ef82>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from "relay-runtime";
export type RootSetDatasetMutation$variables = {
  subscription: string;
  name?: string | null;
};
export type RootSetDatasetMutation$data = {
  readonly setDataset: boolean;
};
export type RootSetDatasetMutation = {
  variables: RootSetDatasetMutation$variables;
  response: RootSetDatasetMutation$data;
};

const node: ConcreteRequest = (function () {
  var v0 = {
      defaultValue: null,
      kind: "LocalArgument",
      name: "name",
    },
    v1 = {
      defaultValue: null,
      kind: "LocalArgument",
      name: "subscription",
    },
    v2 = [
      {
        alias: null,
        args: [
          {
            kind: "Variable",
            name: "name",
            variableName: "name",
          },
          {
            kind: "Variable",
            name: "subscription",
            variableName: "subscription",
          },
        ],
        kind: "ScalarField",
        name: "setDataset",
        storageKey: null,
      },
    ];
  return {
    fragment: {
      argumentDefinitions: [v0 /*: any*/, v1 /*: any*/],
      kind: "Fragment",
      metadata: null,
      name: "RootSetDatasetMutation",
      selections: v2 /*: any*/,
      type: "Mutation",
      abstractKey: null,
    },
    kind: "Request",
    operation: {
      argumentDefinitions: [v1 /*: any*/, v0 /*: any*/],
      kind: "Operation",
      name: "RootSetDatasetMutation",
      selections: v2 /*: any*/,
    },
    params: {
      cacheID: "2499a91c0b527b69c231fb78af843e8d",
      id: null,
      metadata: {},
      name: "RootSetDatasetMutation",
      operationKind: "mutation",
      text:
        "mutation RootSetDatasetMutation(\n  $subscription: String!\n  $name: String\n) {\n  setDataset(subscription: $subscription, name: $name)\n}\n",
    },
  };
})();

(node as any).hash = "72128555a76fe8fb0d29637cecef8560";

export default node;