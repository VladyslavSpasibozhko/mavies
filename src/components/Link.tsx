import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
  StyleProps,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

type LinkProps = {
  to: string;
  children: React.ReactNode;
} & StyleProps &
  Pick<ChakraLinkProps, "isExternal">;

export function Link({ to, children, ...rest }: LinkProps) {
  return (
    <ChakraLink as={RouterLink} to={to} {...rest}>
      {children}
    </ChakraLink>
  );
}
