import { Error } from "../components/Error";
import { Loader } from "../components/Loader";
import { NoResults } from "../components/NoResults";
import { MoviesHorizontalList } from "../features/movies/components/MoviesHorizontalList/MoviesHorizontalList";
import { useFavoriteMovies } from "../features/account/hooks/useFavoriteMovies";
import { useWatchListMovies } from "../features/account/hooks/useWatchList";

export function AccountMoviesView() {
  const watchList = useWatchListMovies();
  const favorite = useFavoriteMovies();

  if (watchList.isLoading || favorite.isLoading) return <Loader />;

  if (watchList.error) {
    return <Error reason={watchList.error.message} />;
  }

  if (favorite.error) {
    return <Error reason={favorite.error.message} />;
  }

  if (!watchList.data || !favorite.data) {
    return <NoResults />;
  }

  return (
    <div>
      <MoviesHorizontalList
        title="Favorite movies"
        movies={favorite.data.results as Movie[]}
      />
      <MoviesHorizontalList
        title="Watch later"
        movies={watchList.data.results}
      />
    </div>
  );
}
