import { Box, BoxProps } from "@chakra-ui/react";
import { Movie } from "../Movie";
import { MovieBaseFragment } from "@api/config/graphql";
import { TextLink } from "./components/TextLink";

type MoviesHorizontalListProps = {
  styles?: BoxProps;
  link?: string;
  title: string;
  movies: MovieBaseFragment[];
};

export function MoviesHorizontalList({
  link,
  title,
  movies,
  styles = {},
}: MoviesHorizontalListProps) {
  return (
    <Box {...styles}>
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
