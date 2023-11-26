import { Error } from "../../../components/Error";
import { Loader } from "../../../components/Loader";
import { NoResults } from "../../../components/NoResults";
import { Movie } from "../../../features/movies/components/Movie/Movie";

type MoviesProps = {
  isLoading: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error: any;
  movies: Movie[];
};

export function Movies({ error, movies, isLoading }: MoviesProps) {
  if (isLoading) return <Loader />;

  if (error) return <Error reason={error.message} />;

  if (!movies.length) return <NoResults />;

  return (
    <div>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          title={movie.title}
          overview={movie.overview}
          poster={movie.poster_path}
        />
      ))}
    </div>
  );
}
