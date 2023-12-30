import { MovieBaseFragment } from "@api/config/graphql";
import { Box } from "@chakra-ui/react";
import { MoviesHorizontalList } from "@features/movies/components/MoviesHorizontalList";
import { useSimilarMovies } from "@features/movies/hooks/useMovies";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function SimilarMovies() {
  const { id } = useParams();

  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState<MovieBaseFragment[]>([]);

  const { data } = useSimilarMovies(id, page);

  useEffect(() => {
    if (data) {
      setMovies((movies) => movies.concat(data.similarMovies.results));
    }
  }, [data]);

  return (
    <Box position="absolute" bottom={0} right={0} left={0} pl={6}>
      <MoviesHorizontalList
        size="sm"
        movies={movies}
        loadMore={() => setPage((page) => page + 1)}
      />
    </Box>
  );
}
