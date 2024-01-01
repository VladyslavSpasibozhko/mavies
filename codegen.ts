import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: process.env.VITE_SERVER_URL,
  documents: "./src/api/**/*.ts",
  ignoreNoDocuments: true,
  generates: {
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
