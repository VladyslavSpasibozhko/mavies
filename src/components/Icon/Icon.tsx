import {
  Icon as ChakraIcon,
  IconProps as ChakraIconProps,
} from "@chakra-ui/react";
import * as AI from "react-icons/ai";
import * as MD from "react-icons/md";
import * as BI from "react-icons/bi";

const icons = {
  ...AI,
  ...BI,
  ...MD,
};

type IconProps = {
  name: keyof typeof icons;
} & ChakraIconProps;

export function Icon({ name, ...rest }: IconProps) {
  const icon = icons[name];
  return <ChakraIcon as={icon} {...rest} />;
}
