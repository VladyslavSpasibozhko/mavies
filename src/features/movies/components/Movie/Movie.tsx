import { MovieContainer } from "./components/MovieContainer/MovieContainer";
import { MovieDetails } from "./components/MovieDetails/MovieDetails";
import { MovieImage } from "./components/MovieImage/MovieImage";
import { MovieOverview } from "./components/MovieOverview";
import { MovieTitle } from "./components/MovieTitle";

export type MovieProps = {
  title: string;
  overview: string;
  poster?: string | null;
  onClick?: () => void;
};

export function Movie({ title, overview, poster, onClick }: MovieProps) {
  return (
    <MovieContainer onClick={onClick}>
      <MovieImage src={poster} className="movie-poster" />

      <MovieDetails>
        <MovieTitle title={title} />
        <MovieOverview overview={overview} />
      </MovieDetails>
    </MovieContainer>
  );
}
