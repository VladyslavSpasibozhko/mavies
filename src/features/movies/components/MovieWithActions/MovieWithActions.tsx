import {
  ToggleFavorite,
  ToggleWatchList,
} from "../Movie/components/MovieActions";
import { MovieContainer } from "../Movie/components/MovieContainer/MovieContainer";
import { MovieDetails } from "../Movie/components/MovieDetails/MovieDetails";
import { MovieImage } from "../Movie/components/MovieImage/MovieImage";
import { MovieOverview } from "../Movie/components/MovieOverview";
import { MovieTitle } from "../Movie/components/MovieTitle";

export type MovieWithActionsProps = {
  movie: Movie;
  onClick?: () => void;
};

export function MovieWithActions({ movie, onClick }: MovieWithActionsProps) {
  return (
    <MovieContainer onClick={onClick}>
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
  );
}
