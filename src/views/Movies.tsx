import { Box } from "@chakra-ui/react";
import { Error } from "../components/Error";
import { Loader } from "../components/Loader";
import { NoResults } from "../components/NoResults";
import { MoviesHorizontalList } from "../features/movies/components/MoviesHorizontalList/MoviesHorizontalList";
import { useMovies } from "../features/movies/hooks/useMovies";

export function Movies() {
  const { data, isLoading, error } = useMovies();

  if (isLoading) return <Loader />;

  if (error) {
    return <Error reason={error.message} />;
  }

  if (!data) {
    return <NoResults />;
  }

  return (
    <Box pl={10} pt={6}>
      <MoviesHorizontalList
        title="Popular"
        link="/movies/popular"
        movies={data.popularMovies.results}
      />
      <MoviesHorizontalList
        title="Top rated"
        link="/movies/top-rated"
        movies={data.topMovies.results}
      />
      <MoviesHorizontalList
        title="Upcoming movies"
        link="/movies/upcoming"
        movies={data.upcomingMovies.results}
      />
    </Box>
  );
}
