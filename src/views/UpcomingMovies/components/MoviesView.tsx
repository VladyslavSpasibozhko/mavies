import { useFilter } from "@features/movies/context/FiltersProvider";
import { Box, Flex, Grid } from "@chakra-ui/react";
import { useUpcomingMovies } from "@features/movies/hooks/useMovies";
import { Pagination } from "@features/movies/components/Pagination";
import { Filters } from "./Filters";
import { Loader } from "@components/Loader";
import { Error } from "@components/Error";
import { NoResults } from "@components/NoResults";

export function MoviesView() {
  const { query, onSetPage } = useFilter();
  const { isLoading, error, data } = useUpcomingMovies(query);

  if (isLoading) return <Loader />;

  if (error) return <Error reason={error.message} />;

  if (!data.upcomingMovies.results) return <NoResults />;

  return (
    <Flex flexDir="column" height="mainContent" position="relative">
      <Filters />
      <Box flex="1" overflow="auto">
        <Grid
          gap={4}
          padding={4}
          templateColumns="repeat(auto-fill, minmax(500px, 1fr))"
        >
          {/* {data.upcomingMovies.results.map((movie) => {

            return (
              <GridItem key={movie.id}>
                <Movie movie={movie} />
              </GridItem>
            );
          })} */}
        </Grid>
      </Box>
      <Box position="sticky" bottom="0">
        <Pagination
          current={data.upcomingMovies.pagination.page}
          total={data.upcomingMovies.pagination.total_pages}
          onChange={onSetPage}
        />
      </Box>
    </Flex>
  );
}
