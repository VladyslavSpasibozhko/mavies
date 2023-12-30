import { useFilter } from "@features/movies/context/FiltersProvider";
import { Box, Flex } from "@chakra-ui/react";
import { useTopRatedMovies } from "@features/movies/hooks/useMovies";
import { Pagination } from "@features/movies/components/Pagination";
import { Filters } from "./Filters";

export function MoviesView() {
  const { query, onSetPage } = useFilter();
  const { data } = useTopRatedMovies(query);

  return (
    <Flex flexDir="column" height="mainContent" position="relative">
      <Filters />

      <Box position="sticky" bottom="0">
        <Pagination
          current={data.topMovies.pagination.page}
          total={data.topMovies.pagination.total_pages}
          onChange={onSetPage}
        />
      </Box>
    </Flex>
  );
}
