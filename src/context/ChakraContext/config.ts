import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        background: "blackAlpha.900",
      },
    },
  },
  sizes: {
    mainHeader: "80px",
    mainContent: "calc(100vh - 80px)",
  },
});
