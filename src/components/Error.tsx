import { Box, Heading } from "@chakra-ui/react";

export function Error({ reason }: { reason: string | number }) {
  return (
    <Box w="100%" h="100%" maxW={500} my={20} mx={"auto"}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Heading color="whiteAlpha.800">Error occur</Heading>

        {reason && (
          <Heading color="whiteAlpha.800" size="md" mt={10}>
            {reason}
          </Heading>
        )}
      </Box>
    </Box>
  );
}
