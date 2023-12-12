import { useFilter } from "@features/movies/context/FiltersProvider";
import { Box, Flex } from "@chakra-ui/react";
import { usePopularMovies } from "@features/movies/hooks/useMovies";
import { Pagination } from "@features/movies/components/Pagination";
import { Filters } from "./Filters";
import { MoviesList } from "./MoviesList";

export function MoviesView() {
  const { query, onSetPage } = useFilter();
  const { isLoading, error, data } = usePopularMovies(query);

  return (
    <Flex flexDir="column" height="mainContent" position="relative">
      <Filters />
      <MoviesList
        isLoading={isLoading}
        movies={data.popularMovies.results}
        error={error}
      />
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
