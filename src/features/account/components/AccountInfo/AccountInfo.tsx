import {
  Flex,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Heading,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { AccountAvatar } from "../AccountAvatar";
import { useUser } from "../../hooks/useUser";
import { Icon } from "@components/Icon";
import { Link } from "@components/Link";
import { useFavoriteMovies } from "@features/account/hooks/useFavoriteMovies";
import { useWatchListMovies } from "@features/account/hooks/useWatchList";

export function AccountInfo() {
  const { data } = useUser();

  const favorite = useFavoriteMovies();
  const watchList = useWatchListMovies();

  const favoriteCount = () => {
    if (favorite.data) return favorite.data.results.length;
    return 0;
  };

  const watchListCount = () => {
    if (watchList.data) {
      return watchList.data.results.length;
    }

    return 0;
  };

  if (!data || !data.user) return null;

  return (
    <Popover>
      <PopoverTrigger>
        <Flex cursor="pointer">
          {data.user.avatar?.gravatar?.hash && (
            <AccountAvatar hash={data.user.avatar.gravatar.hash} size={25} />
          )}
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
            <IconButton
              size="sm"
              aria-label="Search"
              icon={<Icon name="MdLogout" />}
            />
          </Flex>
          <Flex>
            <Link to="/movies/account" mr={2}>
              <Flex align="center">
                <Icon name="MdFavorite" mr={1} />
                <Text fontSize="14" fontWeight={500}>
                  {favoriteCount()}
                </Text>
              </Flex>
            </Link>
            <Link to="/movies/account">
              <Flex align="center">
                <Icon name="MdWatchLater" mr={1} />
                <Text fontSize="14" fontWeight={500}>
                  {watchListCount()}
                </Text>
              </Flex>
            </Link>
          </Flex>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
