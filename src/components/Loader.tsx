import { Box, Spinner, SpinnerProps } from "@chakra-ui/react";

type LoaderProps = SpinnerProps;

export function Loader({
  size = "xl",
  color = "whiteAlpha.900",
  ...props
}: LoaderProps) {
  return (
    <Box
      backgroundColor="blackAlpha.300"
      position="absolute"
      top="0"
      left="0"
      right="0"
      bottom="0"
      zIndex="1"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Spinner size={size} color={color} {...props} />
    </Box>
  );
}
