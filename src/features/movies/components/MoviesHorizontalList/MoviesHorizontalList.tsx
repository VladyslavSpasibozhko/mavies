import { Box, Heading } from "@chakra-ui/react";
import { Movie } from "./components/Movie";
import { Link } from "@components/Link";
import { Icon } from "@components/Icon";

type MoviesHorizontalListProps = {
  title: string;
  link: string;
  movies: Movie[];
};

export function MoviesHorizontalList({
  link,
  title,
  movies,
}: MoviesHorizontalListProps) {
  return (
    <Box>
      <Link to={link} display="flex" alignItems="center">
        <Heading size="md" textTransform="uppercase" color="whiteAlpha.900">
          {title}
        </Heading>
        <Icon name="BiLinkExternal" boxSize={6} color="whiteAlpha.700" ml={2} />
      </Link>
      <Box minHeight={280}>
        <Box
          display="flex"
          alignItems="center"
          overflowX="auto"
          paddingBottom={8}
          paddingTop={8}
        >
          {movies.map((movie) => (
            <Movie key={movie.id} movie={movie} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
