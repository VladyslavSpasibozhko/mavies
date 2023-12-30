import { MovieBaseFragment } from "@api/config/graphql";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import { Error } from "@components/Error";
import { Loader } from "@components/Loader";
import { NoResults } from "@components/NoResults";
import { Movie } from "@features/movies/components/Movie";

type MoviesListProps = {
  isLoading: boolean;
  error: Error;
  movies: MovieBaseFragment[];
};

export function MoviesList({ isLoading, error, movies }: MoviesListProps) {
  if (isLoading) return <Loader />;

  if (error) return <Error reason={error.message} />;

  if (!movies.length) return <NoResults />;

  return (
    <Box flex="1" overflow="auto">
      <Grid
        gap={4}
        padding={4}
        templateColumns="repeat(auto-fill, minmax(500px, 1fr))"
      >
        {movies.map((movie) => (
          <GridItem key={movie.id}>
            <Movie movie={movie} />
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
}
