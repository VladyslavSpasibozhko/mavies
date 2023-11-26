import {
  Flex,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  HStack,
  Heading,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { AccountAvatar } from "../AccountAvatar";
import { ExternalLinkIcon, SettingsIcon } from "@chakra-ui/icons";
import { useUser } from "../../hooks/useUser";

export function AccountInfo() {
  const { data } = useUser();

  if (!data) return null;

  return (
    <Popover>
      <PopoverTrigger>
        <Flex cursor="pointer">
          <AccountAvatar hash={data.user.avatar.gravatar.hash} size={25} />
          <Text color="whiteAlpha.900" as="h6">
            {data.user.name || data.user.username}
          </Text>
        </Flex>
      </PopoverTrigger>
      <PopoverContent _focusVisible={{ outline: "none" }}>
        <PopoverBody>
          <Flex alignItems="center" justifyContent="space-between">
            <Heading as="h6" size="xs">
              {data.user.name || data.user.username}
            </Heading>
            <HStack>
              <IconButton
                size="sm"
                aria-label="Search"
                icon={<SettingsIcon />}
              />
              <IconButton
                size="sm"
                aria-label="LogOut"
                icon={<ExternalLinkIcon />}
              />
            </HStack>
          </Flex>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
