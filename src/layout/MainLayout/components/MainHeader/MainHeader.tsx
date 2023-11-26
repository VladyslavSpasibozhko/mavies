import { Link } from "@components/Link";
import { AccountInfo } from "@features/account/components/AccountInfo";
import { MovieSearch } from "@features/movies/components/MovieSearch";
import { Flex, HStack } from "@chakra-ui/react";

export function MainHeader() {
  return (
    <Flex
      width="100%"
      px="8"
      py="4"
      borderBottom="2px"
      borderColor="whiteAlpha.300"
      height="mainHeader"
    >
      <HStack display="flex" alignItems="center">
        <Link fontWeight={600} color="whiteAlpha.900" to="/movies">
          Main
        </Link>
        <Link fontWeight={600} color="whiteAlpha.900" to="/movies/popular">
          Popular
        </Link>
        <Link fontWeight={600} color="whiteAlpha.900" to="/movies/top-rated">
          Top rated
        </Link>
        <Link fontWeight={600} color="whiteAlpha.900" to="/movies/upcoming">
          Upcoming
        </Link>
      </HStack>
      <Flex flex="1" alignItems="center">
        <Flex flex="1" px="4">
          <MovieSearch />
        </Flex>
        <AccountInfo />
      </Flex>
    </Flex>
  );
}
