import { Box, Heading } from "@chakra-ui/react";
import { Movie } from "../Movie";
import { Link } from "@components/Link";
import { Icon } from "@components/Icon";
import { MovieBaseFragment } from "@api/config/graphql";

type MoviesHorizontalListProps = {
  link?: string;
  title: string;
  movies: MovieBaseFragment[];
};

function TextLink({ title, link }: { title: string; link?: string }) {
  if (link) {
    return (
      <Link to={link} display="flex" alignItems="center">
        <Heading size="md" textTransform="uppercase" color="whiteAlpha.900">
          {title}
        </Heading>
        <Icon name="BiLinkExternal" boxSize={6} color="whiteAlpha.700" ml={2} />
      </Link>
    );
  }

  return (
    <Heading size="md" textTransform="uppercase" color="whiteAlpha.900">
      {title}
    </Heading>
  );
}

export function MoviesHorizontalList({
  link,
  title,
  movies,
}: MoviesHorizontalListProps) {
  return (
    <Box>
      <TextLink link={link} title={title} />
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
