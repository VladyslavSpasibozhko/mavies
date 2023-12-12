import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  // TODO: Move to env
  schema: "http://localhost:8080",
  documents: ["src/**/*.ts", "src/**/*.tsx"],
  ignoreNoDocuments: true,
  generates: {
    "./src/api/gql/": {
      preset: "client",
    },
    "./graphql.schema.json": {
      plugins: ["@graphql-codegen/introspection"],
    },
  },
};

export default config;
