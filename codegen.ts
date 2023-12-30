import { CodegenConfig } from "@graphql-codegen/cli";
import path from "path";

console.log(process.cwd());

const config: CodegenConfig = {
  // TODO: Move to env
  schema: "http://localhost:8080",
  documents: "./src/api/**/*.ts",
  ignoreNoDocuments: true,
  generates: {
    // "src/": {
    //   overwrite: true,
    //   config: {
    //     dedupeOperationSuffix: true,
    //     documentMode: "documentNodeImportFragments",
    //     nonOptionalTypename: true,
    //     omitOperationSuffix: true,
    //     preResolveTypes: true,
    //   },
    //   plugins: ["typescript-operations"],
    //   preset: "near-operation-file",
    //   presetConfig: {
    //     baseTypesPath: "./api/types.ts",
    //     folder: "types",
    //   },
    // },
    // "src/api/types.ts": {
    //   overwrite: true,
    //   plugins: ["typescript"],
    // },
    "src/api/config/": {
      overwrite: true,
      preset: "client",
      presetConfig: {
        fragmentMasking: false,
      },
    },
  },
  hooks: {
    afterAllFileWrite: ["prettier --write"],
  },
};

export default config;
