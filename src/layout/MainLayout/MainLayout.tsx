import { Box } from "@chakra-ui/react";
import { MainHeader } from "./components/MainHeader";

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <Box background="black" minHeight="100vh">
      <MainHeader />
      <Box minHeight="mainContent" width="100%">
        {children}
      </Box>
    </Box>
  );
}
