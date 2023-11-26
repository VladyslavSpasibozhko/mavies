import { Link as ChakraLink, StyleProps } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

type LinkProps = {
  to: string;
  children: React.ReactNode;
} & StyleProps;

export function Link({ to, children, ...rest }: LinkProps) {
  return (
    <ChakraLink as={RouterLink} to={to} {...rest}>
      {children}
    </ChakraLink>
  );
}
