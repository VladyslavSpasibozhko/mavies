type User = {
  avatar: {
    gravatar: {
      hash: string;
    };
    tmdb: {
      avatar_path: string;
    };
  };
  id: number;
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  include_adult: boolean;
  username: string;
};

type GetFavMovies = {
  favorite: { results: MovieBase[] };
};

type GetWatchListMovies = {
  watchList: { results: MovieBase[] };
};

type AddWatchListRes = {
  addWatchList: { success: boolean };
};

type AddWatchListInput = {
  media_type: "movie";
  media_id: number;
  watchlist: boolean;
};

type AddFavoriteRes = {
  addFavorite: { success: boolean };
};

type AddFavoriteInput = {
  media_type: "movie";
  media_id: number;
  favorite: boolean;
};
