import { Error } from "../components/Error";
import { Loader } from "../components/Loader";
import { NoResults } from "../components/NoResults";
import {
  ToggleFavorite,
  ToggleWatchList,
} from "../features/movies/components/Movie/components/MovieActions";
import { MovieContainer } from "../features/movies/components/Movie/components/MovieContainer/MovieContainer";
import { MovieDetails } from "../features/movies/components/Movie/components/MovieDetails/MovieDetails";
import { MovieImage } from "../features/movies/components/Movie/components/MovieImage/MovieImage";
import { MovieOverview } from "../features/movies/components/Movie/components/MovieOverview";
import { MovieTitle } from "../features/movies/components/Movie/components/MovieTitle";
import { MoviesHorizontalList } from "../features/movies/components/MoviesHorizontalList/MoviesHorizontalList";
import { useFavoriteMovies } from "../features/account/hooks/useFavoriteMovies";
import { useWatchListMovies } from "../features/account/hooks/useWatchList";
import { useNavigation } from "../hooks/useNavigation";

export function AccountMoviesView() {
  const { goTo } = useNavigation();

  const watchList = useWatchListMovies();
  const favorite = useFavoriteMovies();

  function onMovieClick(id: number) {
    goTo("/movies/:id", { id });
  }

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
        renderMovie={(movie) => (
          <MovieContainer onClick={() => onMovieClick(movie.id)}>
            <MovieImage src={movie.poster_path} />
            <MovieDetails>
              <MovieTitle title={movie.title} />
              <MovieOverview overview={movie.overview} />
              <div>
                <ToggleFavorite movie={movie} />
                <ToggleWatchList movie={movie} />
              </div>
            </MovieDetails>
          </MovieContainer>
        )}
      />
      <MoviesHorizontalList
        title="Watch later"
        movies={watchList.data.results}
        renderMovie={(movie) => (
          <MovieContainer onClick={() => onMovieClick(movie.id)}>
            <MovieImage src={movie.poster_path} />
            <MovieDetails>
              <MovieTitle title={movie.title} />
              <MovieOverview overview={movie.overview} />
              <div>
                <ToggleFavorite movie={movie} />
                <ToggleWatchList movie={movie} />
              </div>
            </MovieDetails>
          </MovieContainer>
        )}
      />
    </div>
  );
}
