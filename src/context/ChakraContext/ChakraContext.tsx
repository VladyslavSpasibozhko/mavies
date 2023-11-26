import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./config";

export function ChakraContext({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
