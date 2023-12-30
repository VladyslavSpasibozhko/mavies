/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type AddFavoriteInput = {
  favorite: Scalars["Boolean"]["input"];
  media_id: Scalars["Int"]["input"];
  media_type: Scalars["String"]["input"];
};

export type AddFavoriteResponse = {
  __typename?: "AddFavoriteResponse";
  status_message?: Maybe<Scalars["String"]["output"]>;
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type AddWatchListInput = {
  media_id: Scalars["Int"]["input"];
  media_type: Scalars["String"]["input"];
  watchlist: Scalars["Boolean"]["input"];
};

export type AddWatchListResponse = {
  __typename?: "AddWatchListResponse";
  status_message?: Maybe<Scalars["String"]["output"]>;
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type Collection = {
  __typename?: "Collection";
  backdrop_path?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  poster_path?: Maybe<Scalars["String"]["output"]>;
};

export type FavoriteResponse = {
  __typename?: "FavoriteResponse";
  pagination: Pagination;
  results: Array<Movie>;
};

export type Genre = {
  __typename?: "Genre";
  id: Scalars["Int"]["output"];
  name: Scalars["String"]["output"];
};

export type Movie = {
  __typename?: "Movie";
  adult?: Maybe<Scalars["Boolean"]["output"]>;
  backdrop_path?: Maybe<Scalars["String"]["output"]>;
  genre_ids: Array<Scalars["Int"]["output"]>;
  id: Scalars["Int"]["output"];
  original_language?: Maybe<Scalars["String"]["output"]>;
  original_title?: Maybe<Scalars["String"]["output"]>;
  overview?: Maybe<Scalars["String"]["output"]>;
  popularity?: Maybe<Scalars["Float"]["output"]>;
  poster_path?: Maybe<Scalars["String"]["output"]>;
  release_date?: Maybe<Scalars["String"]["output"]>;
  title: Scalars["String"]["output"];
  video?: Maybe<Scalars["Boolean"]["output"]>;
  vote_average?: Maybe<Scalars["Float"]["output"]>;
  vote_count?: Maybe<Scalars["Int"]["output"]>;
};

export type MovieDetailed = {
  __typename?: "MovieDetailed";
  adult?: Maybe<Scalars["Boolean"]["output"]>;
  backdrop_path?: Maybe<Scalars["String"]["output"]>;
  belongs_to_collection?: Maybe<Collection>;
  budget?: Maybe<Scalars["Int"]["output"]>;
  genres: Array<Genre>;
  homepage?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["Int"]["output"];
  imdb_id?: Maybe<Scalars["String"]["output"]>;
  original_language?: Maybe<Scalars["String"]["output"]>;
  original_title?: Maybe<Scalars["String"]["output"]>;
  overview?: Maybe<Scalars["String"]["output"]>;
  popularity?: Maybe<Scalars["Float"]["output"]>;
  poster_path?: Maybe<Scalars["String"]["output"]>;
  production_companies?: Maybe<Array<Maybe<ProductionCompany>>>;
  production_countries?: Maybe<Array<Maybe<ProductionCountry>>>;
  release_date?: Maybe<Scalars["String"]["output"]>;
  revenue?: Maybe<Scalars["Int"]["output"]>;
  runtime?: Maybe<Scalars["Int"]["output"]>;
  spoken_languages?: Maybe<Array<Maybe<SpokenLanguage>>>;
  status?: Maybe<Scalars["String"]["output"]>;
  tagline?: Maybe<Scalars["String"]["output"]>;
  title: Scalars["String"]["output"];
  video?: Maybe<Scalars["Boolean"]["output"]>;
  vote_average?: Maybe<Scalars["Float"]["output"]>;
  vote_count?: Maybe<Scalars["Int"]["output"]>;
};

export type MoviesPaginated = {
  __typename?: "MoviesPaginated";
  pagination: Pagination;
  results: Array<Movie>;
};

export type MoviesQuery = {
  include_adult?: InputMaybe<Scalars["Boolean"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  release_date_max?: InputMaybe<Scalars["String"]["input"]>;
  release_date_min?: InputMaybe<Scalars["String"]["input"]>;
  vote_average_max?: InputMaybe<Scalars["Float"]["input"]>;
  vote_average_min?: InputMaybe<Scalars["Float"]["input"]>;
  with_genres?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  without_genres?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
};

export type Mutation = {
  __typename?: "Mutation";
  addFavorite: AddFavoriteResponse;
  addWatchList: AddWatchListResponse;
};

export type MutationAddFavoriteArgs = {
  account_id: Scalars["String"]["input"];
  input: AddFavoriteInput;
  session_id?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationAddWatchListArgs = {
  account_id: Scalars["String"]["input"];
  input: AddWatchListInput;
  session_id?: InputMaybe<Scalars["String"]["input"]>;
};

export type Pagination = {
  __typename?: "Pagination";
  page: Scalars["Int"]["output"];
  total_pages: Scalars["Int"]["output"];
  total_results: Scalars["Int"]["output"];
};

export type ProductionCompany = {
  __typename?: "ProductionCompany";
  id?: Maybe<Scalars["Int"]["output"]>;
  logo_path?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  origin_country?: Maybe<Scalars["String"]["output"]>;
};

export type ProductionCountry = {
  __typename?: "ProductionCountry";
  iso_3166_1?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
};

export type Query = {
  __typename?: "Query";
  favorite: FavoriteResponse;
  movie: MovieDetailed;
  movieGenres: Array<Genre>;
  movies: MoviesPaginated;
  popularMovies: MoviesPaginated;
  searchMovies: MoviesPaginated;
  similarMovies: MoviesPaginated;
  topMovies: MoviesPaginated;
  tvGenres: Array<Genre>;
  upcomingMovies: MoviesPaginated;
  user?: Maybe<UserResponse>;
  watchList: WatchListResponse;
};

export type QueryFavoriteArgs = {
  account_id: Scalars["String"]["input"];
  page?: InputMaybe<Scalars["Int"]["input"]>;
  session_id?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryMovieArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryMoviesArgs = {
  input?: InputMaybe<MoviesQuery>;
};

export type QueryPopularMoviesArgs = {
  input?: InputMaybe<MoviesQuery>;
};

export type QuerySearchMoviesArgs = {
  page?: InputMaybe<Scalars["Int"]["input"]>;
  query: Scalars["String"]["input"];
};

export type QuerySimilarMoviesArgs = {
  id: Scalars["ID"]["input"];
  page?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryTopMoviesArgs = {
  input?: InputMaybe<MoviesQuery>;
};

export type QueryUpcomingMoviesArgs = {
  input?: InputMaybe<MoviesQuery>;
};

export type QueryUserArgs = {
  account_id: Scalars["String"]["input"];
};

export type QueryWatchListArgs = {
  account_id: Scalars["String"]["input"];
  page?: InputMaybe<Scalars["Int"]["input"]>;
  session_id?: InputMaybe<Scalars["String"]["input"]>;
};

export type SpokenLanguage = {
  __typename?: "SpokenLanguage";
  english_name?: Maybe<Scalars["String"]["output"]>;
  iso_639_1?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
};

export type UserAvatar = {
  __typename?: "UserAvatar";
  gravatar?: Maybe<UserGravatar>;
  tmdb?: Maybe<UserTmdb>;
};

export type UserGravatar = {
  __typename?: "UserGravatar";
  hash?: Maybe<Scalars["String"]["output"]>;
};

export type UserResponse = {
  __typename?: "UserResponse";
  avatar?: Maybe<UserAvatar>;
  id?: Maybe<Scalars["Int"]["output"]>;
  include_adult?: Maybe<Scalars["Boolean"]["output"]>;
  iso_639_1?: Maybe<Scalars["String"]["output"]>;
  iso_3166_1?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  username?: Maybe<Scalars["String"]["output"]>;
};

export type UserTmdb = {
  __typename?: "UserTmdb";
  avatar_path?: Maybe<Scalars["String"]["output"]>;
};

export type WatchListResponse = {
  __typename?: "WatchListResponse";
  pagination: Pagination;
  results: Array<Movie>;
};

export type AddToFavoriteMutationVariables = Exact<{
  account_id: Scalars["String"]["input"];
  session_id?: InputMaybe<Scalars["String"]["input"]>;
  input: AddFavoriteInput;
}>;

export type AddToFavoriteMutation = {
  __typename?: "Mutation";
  addFavorite: { __typename?: "AddFavoriteResponse"; success?: boolean | null };
};

export type AddToWatchListMutationVariables = Exact<{
  account_id: Scalars["String"]["input"];
  session_id?: InputMaybe<Scalars["String"]["input"]>;
  input: AddWatchListInput;
}>;

export type AddToWatchListMutation = {
  __typename?: "Mutation";
  addWatchList: {
    __typename?: "AddWatchListResponse";
    success?: boolean | null;
  };
};

export type GetFavoriteQueryVariables = Exact<{
  account_id: Scalars["String"]["input"];
  session_id?: InputMaybe<Scalars["String"]["input"]>;
}>;

export type GetFavoriteQuery = {
  __typename?: "Query";
  favorite: {
    __typename?: "FavoriteResponse";
    results: Array<{
      __typename?: "Movie";
      id: number;
      title: string;
      vote_average?: number | null;
      vote_count?: number | null;
      poster_path?: string | null;
      backdrop_path?: string | null;
      overview?: string | null;
    }>;
  };
};

export type GetWatchListQueryVariables = Exact<{
  account_id: Scalars["String"]["input"];
  session_id?: InputMaybe<Scalars["String"]["input"]>;
}>;

export type GetWatchListQuery = {
  __typename?: "Query";
  watchList: {
    __typename?: "WatchListResponse";
    results: Array<{
      __typename?: "Movie";
      id: number;
      title: string;
      vote_average?: number | null;
      vote_count?: number | null;
      poster_path?: string | null;
      backdrop_path?: string | null;
      overview?: string | null;
    }>;
  };
};

export type GetUserQueryVariables = Exact<{
  account_id: Scalars["String"]["input"];
}>;

export type GetUserQuery = {
  __typename?: "Query";
  user?: {
    __typename?: "UserResponse";
    id?: number | null;
    iso_639_1?: string | null;
    iso_3166_1?: string | null;
    name?: string | null;
    include_adult?: boolean | null;
    username?: string | null;
    avatar?: {
      __typename?: "UserAvatar";
      gravatar?: { __typename?: "UserGravatar"; hash?: string | null } | null;
      tmdb?: { __typename?: "UserTmdb"; avatar_path?: string | null } | null;
    } | null;
  } | null;
};

export type GenreListQueryVariables = Exact<{ [key: string]: never }>;

export type GenreListQuery = {
  __typename?: "Query";
  movieGenres: Array<{ __typename?: "Genre"; id: number; name: string }>;
};

export type MovieBaseFragment = {
  __typename?: "Movie";
  id: number;
  title: string;
  vote_average?: number | null;
  vote_count?: number | null;
  poster_path?: string | null;
  backdrop_path?: string | null;
  overview?: string | null;
};

export type MoviesListsQueryVariables = Exact<{ [key: string]: never }>;

export type MoviesListsQuery = {
  __typename?: "Query";
  movies: {
    __typename?: "MoviesPaginated";
    results: Array<{
      __typename?: "Movie";
      id: number;
      title: string;
      vote_average?: number | null;
      vote_count?: number | null;
      poster_path?: string | null;
      backdrop_path?: string | null;
      overview?: string | null;
    }>;
  };
  popularMovies: {
    __typename?: "MoviesPaginated";
    results: Array<{
      __typename?: "Movie";
      id: number;
      title: string;
      vote_average?: number | null;
      vote_count?: number | null;
      poster_path?: string | null;
      backdrop_path?: string | null;
      overview?: string | null;
    }>;
  };
  upcomingMovies: {
    __typename?: "MoviesPaginated";
    results: Array<{
      __typename?: "Movie";
      id: number;
      title: string;
      vote_average?: number | null;
      vote_count?: number | null;
      poster_path?: string | null;
      backdrop_path?: string | null;
      overview?: string | null;
    }>;
  };
  topMovies: {
    __typename?: "MoviesPaginated";
    results: Array<{
      __typename?: "Movie";
      id: number;
      title: string;
      vote_average?: number | null;
      vote_count?: number | null;
      poster_path?: string | null;
      backdrop_path?: string | null;
      overview?: string | null;
    }>;
  };
};

export type PopularMoviesQueryVariables = Exact<{
  input?: InputMaybe<MoviesQuery>;
}>;

export type PopularMoviesQuery = {
  __typename?: "Query";
  popularMovies: {
    __typename?: "MoviesPaginated";
    results: Array<{
      __typename?: "Movie";
      id: number;
      title: string;
      vote_average?: number | null;
      vote_count?: number | null;
      poster_path?: string | null;
      backdrop_path?: string | null;
      overview?: string | null;
    }>;
    pagination: {
      __typename?: "Pagination";
      page: number;
      total_pages: number;
      total_results: number;
    };
  };
};

export type TopRatedMoviesQueryVariables = Exact<{
  input?: InputMaybe<MoviesQuery>;
}>;

export type TopRatedMoviesQuery = {
  __typename?: "Query";
  topMovies: {
    __typename?: "MoviesPaginated";
    results: Array<{
      __typename?: "Movie";
      id: number;
      title: string;
      vote_average?: number | null;
      vote_count?: number | null;
      poster_path?: string | null;
      backdrop_path?: string | null;
      overview?: string | null;
    }>;
    pagination: {
      __typename?: "Pagination";
      total_pages: number;
      total_results: number;
      page: number;
    };
  };
};

export type UpcomingMoviesQueryVariables = Exact<{
  input?: InputMaybe<MoviesQuery>;
}>;

export type UpcomingMoviesQuery = {
  __typename?: "Query";
  upcomingMovies: {
    __typename?: "MoviesPaginated";
    results: Array<{
      __typename?: "Movie";
      id: number;
      title: string;
      vote_average?: number | null;
      vote_count?: number | null;
      poster_path?: string | null;
      backdrop_path?: string | null;
      overview?: string | null;
    }>;
    pagination: {
      __typename?: "Pagination";
      page: number;
      total_pages: number;
      total_results: number;
    };
  };
};

export type SearchMoviesQueryVariables = Exact<{
  query: Scalars["String"]["input"];
  page?: InputMaybe<Scalars["Int"]["input"]>;
}>;

export type SearchMoviesQuery = {
  __typename?: "Query";
  searchMovies: {
    __typename?: "MoviesPaginated";
    results: Array<{
      __typename?: "Movie";
      id: number;
      title: string;
      vote_average?: number | null;
      vote_count?: number | null;
      poster_path?: string | null;
      backdrop_path?: string | null;
      overview?: string | null;
    }>;
    pagination: {
      __typename?: "Pagination";
      page: number;
      total_pages: number;
      total_results: number;
    };
  };
};

export type SimilarMoviesQueryVariables = Exact<{
  id: Scalars["ID"]["input"];
  page?: InputMaybe<Scalars["Int"]["input"]>;
}>;

export type SimilarMoviesQuery = {
  __typename?: "Query";
  similarMovies: {
    __typename?: "MoviesPaginated";
    results: Array<{
      __typename?: "Movie";
      id: number;
      title: string;
      vote_average?: number | null;
      vote_count?: number | null;
      poster_path?: string | null;
      backdrop_path?: string | null;
      overview?: string | null;
    }>;
    pagination: {
      __typename?: "Pagination";
      page: number;
      total_pages: number;
      total_results: number;
    };
  };
};

export type GetMovieQueryVariables = Exact<{
  id: Scalars["ID"]["input"];
}>;

export type GetMovieQuery = {
  __typename?: "Query";
  movie: {
    __typename?: "MovieDetailed";
    id: number;
    title: string;
    vote_average?: number | null;
    vote_count?: number | null;
    poster_path?: string | null;
    backdrop_path?: string | null;
    overview?: string | null;
    release_date?: string | null;
    genres: Array<{ __typename?: "Genre"; id: number; name: string }>;
  };
};

export const MovieBaseFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "MovieBase" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Movie" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "vote_average" } },
          { kind: "Field", name: { kind: "Name", value: "vote_count" } },
          { kind: "Field", name: { kind: "Name", value: "poster_path" } },
          { kind: "Field", name: { kind: "Name", value: "backdrop_path" } },
          { kind: "Field", name: { kind: "Name", value: "overview" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<MovieBaseFragment, unknown>;
export const AddToFavoriteDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "AddToFavorite" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "account_id" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "session_id" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "AddFavoriteInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "addFavorite" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "account_id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "account_id" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "session_id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "session_id" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "success" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  AddToFavoriteMutation,
  AddToFavoriteMutationVariables
>;
export const AddToWatchListDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "AddToWatchList" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "account_id" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "session_id" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "AddWatchListInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "addWatchList" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "account_id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "account_id" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "session_id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "session_id" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "success" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  AddToWatchListMutation,
  AddToWatchListMutationVariables
>;
export const GetFavoriteDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetFavorite" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "account_id" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "session_id" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "favorite" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "account_id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "account_id" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "session_id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "session_id" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "results" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "MovieBase" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "MovieBase" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Movie" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "vote_average" } },
          { kind: "Field", name: { kind: "Name", value: "vote_count" } },
          { kind: "Field", name: { kind: "Name", value: "poster_path" } },
          { kind: "Field", name: { kind: "Name", value: "backdrop_path" } },
          { kind: "Field", name: { kind: "Name", value: "overview" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetFavoriteQuery, GetFavoriteQueryVariables>;
export const GetWatchListDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetWatchList" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "account_id" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "session_id" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "watchList" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "account_id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "account_id" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "session_id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "session_id" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "results" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "MovieBase" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "MovieBase" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Movie" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "vote_average" } },
          { kind: "Field", name: { kind: "Name", value: "vote_count" } },
          { kind: "Field", name: { kind: "Name", value: "poster_path" } },
          { kind: "Field", name: { kind: "Name", value: "backdrop_path" } },
          { kind: "Field", name: { kind: "Name", value: "overview" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetWatchListQuery, GetWatchListQueryVariables>;
export const GetUserDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetUser" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "account_id" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "user" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "account_id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "account_id" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "avatar" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "gravatar" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "hash" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "tmdb" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "avatar_path" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "iso_639_1" } },
                { kind: "Field", name: { kind: "Name", value: "iso_3166_1" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "include_adult" },
                },
                { kind: "Field", name: { kind: "Name", value: "username" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetUserQuery, GetUserQueryVariables>;
export const GenreListDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GenreList" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "movieGenres" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GenreListQuery, GenreListQueryVariables>;
export const MoviesListsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "MoviesLists" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "movies" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "results" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "MovieBase" },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "popularMovies" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "results" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "MovieBase" },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "upcomingMovies" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "results" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "MovieBase" },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "topMovies" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "results" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "MovieBase" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "MovieBase" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Movie" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "vote_average" } },
          { kind: "Field", name: { kind: "Name", value: "vote_count" } },
          { kind: "Field", name: { kind: "Name", value: "poster_path" } },
          { kind: "Field", name: { kind: "Name", value: "backdrop_path" } },
          { kind: "Field", name: { kind: "Name", value: "overview" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<MoviesListsQuery, MoviesListsQueryVariables>;
export const PopularMoviesDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "PopularMovies" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "MoviesQuery" },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "popularMovies" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "results" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "MovieBase" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "pagination" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "page" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "total_pages" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "total_results" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "MovieBase" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Movie" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "vote_average" } },
          { kind: "Field", name: { kind: "Name", value: "vote_count" } },
          { kind: "Field", name: { kind: "Name", value: "poster_path" } },
          { kind: "Field", name: { kind: "Name", value: "backdrop_path" } },
          { kind: "Field", name: { kind: "Name", value: "overview" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PopularMoviesQuery, PopularMoviesQueryVariables>;
export const TopRatedMoviesDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "TopRatedMovies" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "MoviesQuery" },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "topMovies" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "results" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "MovieBase" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "pagination" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "total_pages" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "total_results" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "page" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "MovieBase" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Movie" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "vote_average" } },
          { kind: "Field", name: { kind: "Name", value: "vote_count" } },
          { kind: "Field", name: { kind: "Name", value: "poster_path" } },
          { kind: "Field", name: { kind: "Name", value: "backdrop_path" } },
          { kind: "Field", name: { kind: "Name", value: "overview" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<TopRatedMoviesQuery, TopRatedMoviesQueryVariables>;
export const UpcomingMoviesDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "UpcomingMovies" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "MoviesQuery" },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "upcomingMovies" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "results" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "MovieBase" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "pagination" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "page" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "total_pages" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "total_results" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "MovieBase" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Movie" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "vote_average" } },
          { kind: "Field", name: { kind: "Name", value: "vote_count" } },
          { kind: "Field", name: { kind: "Name", value: "poster_path" } },
          { kind: "Field", name: { kind: "Name", value: "backdrop_path" } },
          { kind: "Field", name: { kind: "Name", value: "overview" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UpcomingMoviesQuery, UpcomingMoviesQueryVariables>;
export const SearchMoviesDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "SearchMovies" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "query" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "page" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "searchMovies" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "query" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "query" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "page" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "page" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "results" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "MovieBase" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "pagination" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "page" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "total_pages" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "total_results" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "MovieBase" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Movie" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "vote_average" } },
          { kind: "Field", name: { kind: "Name", value: "vote_count" } },
          { kind: "Field", name: { kind: "Name", value: "poster_path" } },
          { kind: "Field", name: { kind: "Name", value: "backdrop_path" } },
          { kind: "Field", name: { kind: "Name", value: "overview" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SearchMoviesQuery, SearchMoviesQueryVariables>;
export const SimilarMoviesDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "SimilarMovies" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "page" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "similarMovies" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "page" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "page" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "results" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "MovieBase" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "pagination" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "page" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "total_pages" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "total_results" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "MovieBase" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Movie" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "vote_average" } },
          { kind: "Field", name: { kind: "Name", value: "vote_count" } },
          { kind: "Field", name: { kind: "Name", value: "poster_path" } },
          { kind: "Field", name: { kind: "Name", value: "backdrop_path" } },
          { kind: "Field", name: { kind: "Name", value: "overview" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SimilarMoviesQuery, SimilarMoviesQueryVariables>;
export const GetMovieDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetMovie" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "movie" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "title" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "vote_average" },
                },
                { kind: "Field", name: { kind: "Name", value: "vote_count" } },
                { kind: "Field", name: { kind: "Name", value: "poster_path" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "backdrop_path" },
                },
                { kind: "Field", name: { kind: "Name", value: "overview" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "release_date" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "genres" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetMovieQuery, GetMovieQueryVariables>;
