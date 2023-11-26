import { GenresSelect } from "../../features/genres/components/GenresSelect";
import { Pagination } from "../../features/movies/components/Pagination";
import { VoteAverageFilter } from "../../features/movies/components/VoteAverageFilter/VoteAverageFilter";
import { useFilters } from "../../features/movies/hooks/useFilters";
import { usePopularMovies } from "../../features/movies/hooks/useMovies";
import { Movies } from "./components/Movies";

export function PopularMovies() {
  const {
    query,
    voting,
    withGenres,
    withoutGenres,
    onSetWithGenres,
    onSetWithoutGenres,
    onSetVoting,
    onSetPage,
  } = useFilters();

  const { error, isLoading, data, refetch } = usePopularMovies();

  return (
    <div>
      <GenresSelect
        selected={withGenres}
        placeholder="Include genres"
        onChange={onSetWithGenres}
      />
      <GenresSelect
        selected={withoutGenres}
        placeholder="Exclude genres"
        onChange={onSetWithoutGenres}
      />
      <VoteAverageFilter
        min={voting.min}
        max={voting.max}
        onChange={onSetVoting}
      />
      <Pagination
        current={data ? data.popularMovies.pagination.page : 0}
        total={data ? data.popularMovies.pagination.total_pages : 0}
        onChange={onSetPage}
      />

      <button onClick={() => refetch(query)}>Apply</button>
      <Movies
        error={error}
        movies={data?.popularMovies.results || []}
        isLoading={isLoading}
      />
    </div>
  );
}
