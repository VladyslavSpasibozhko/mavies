type MovieBase = {
  id: number;
  title: string;
  vote_average: number;
  vote_count: number;
  poster_path: string;
  backdrop_path: string;
  overview: string;
};

type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

type MovieDetailed = {
  adult: boolean;
  backdrop_path: string;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  // production_companies: [ProductionCompany]
  // production_countries: [ProductionCountry]
  release_date: string;
  revenue: number;
  runtime: number;
  // spoken_languages: [SpokenLanguage]
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

type MovieList = {
  results: Movie[];
};

type MovieWithPagination = {
  results: Movie[];
  pagination: Pagination;
};

type Pagination = {
  page: number;
  total_pages: number;
  total_results: number;
};

type GetMoviesRes = {
  movies: MovieList;
  upcomingMovies: MovieList;
  popularMovies: MovieList;
  topMovies: MovieList;
};
