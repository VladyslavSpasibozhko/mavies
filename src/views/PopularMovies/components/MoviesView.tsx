import { useFilter } from "@features/movies/context/FiltersProvider";
import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import { usePopularMovies } from "@features/movies/hooks/useMovies";
import { Pagination } from "@features/movies/components/Pagination";
import { Filters } from "./Filters";
import { Loader } from "@components/Loader";
import { Error } from "@components/Error";
import { NoResults } from "@components/NoResults";
import { Movie } from "@features/movies/components/Movie";

export function MoviesView() {
  const { query, onSetPage } = useFilter();
  const { isLoading, error, data } = usePopularMovies(query);

  if (isLoading) return <Loader />;

  if (error) return <Error reason={error.message} />;

  if (!data.popularMovies.results.length) return <NoResults />;

  return (
    <Flex flexDir="column" height="mainContent" position="relative">
      <Filters />
      <Box flex="1" overflow="auto">
        <Grid
          gap={4}
          padding={4}
          templateColumns="repeat(auto-fill, minmax(500px, 1fr))"
        >
          {data.popularMovies.results.map((movie) => (
            <GridItem key={movie.id}>
              <Movie movie={movie} />
            </GridItem>
          ))}
        </Grid>
      </Box>
      <Box position="sticky" bottom="0">
        <Pagination
          current={data.popularMovies.pagination.page}
          total={data.popularMovies.pagination.total_pages}
          onChange={onSetPage}
        />
      </Box>
    </Flex>
  );
}
