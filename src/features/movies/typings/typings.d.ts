type MoviesQuery = {
  include_adult?: boolean;
  release_date_min?: string;
  release_date_max?: string;
  vote_average_min?: number;
  vote_average_max?: number;
  with_genres?: number[];
  without_genres?: number[];
  page?: number;
};
