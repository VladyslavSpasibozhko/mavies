import { Box, Heading } from "@chakra-ui/react";

export function NoResults() {
  return (
    <Box
      position="absolute"
      top="0"
      left="0"
      bottom="0"
      right="0"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Heading size="md" color="whiteAlpha.800">
        Not found
      </Heading>
    </Box>
  );
}
