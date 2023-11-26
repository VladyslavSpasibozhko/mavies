import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  sizes: {
    mainHeader: "80px",
    mainContent: "calc(100vh - 80px)",
  },
});
