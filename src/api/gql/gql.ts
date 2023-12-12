/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  mutation AddToFavorite(\n    $account_id: String!\n    $session_id: String\n    $input: AddFavoriteInput!\n  ) {\n    addFavorite(\n      account_id: $account_id\n      session_id: $session_id\n      input: $input\n    ) {\n      success\n    }\n  }\n": types.AddToFavoriteDocument,
    "\n  mutation AddToWatchList(\n    $account_id: String!\n    $session_id: String\n    $input: AddWatchListInput!\n  ) {\n    addWatchList(\n      account_id: $account_id\n      session_id: $session_id\n      input: $input\n    ) {\n      success\n    }\n  }\n": types.AddToWatchListDocument,
    "\n  query GetFavorite($account_id: String!, $session_id: String) {\n    favorite(account_id: $account_id, session_id: $session_id) {\n      results {\n        ...MovieBase\n      }\n    }\n  }\n": types.GetFavoriteDocument,
    "\n  query GetWatchList($account_id: String!, $session_id: String) {\n    watchList(account_id: $account_id, session_id: $session_id) {\n      results {\n        ...MovieBase\n      }\n    }\n  }\n": types.GetWatchListDocument,
    "\n  query GetUser($account_id: String!) {\n    user(account_id: $account_id) {\n      avatar {\n        gravatar {\n          hash\n        }\n        tmdb {\n          avatar_path\n        }\n      }\n      id\n      iso_639_1\n      iso_3166_1\n      name\n      include_adult\n      username\n    }\n  }\n": types.GetUserDocument,
    "\n  fragment MovieBase on Movie {\n    id\n    title\n    vote_average\n    vote_count\n    poster_path\n    backdrop_path\n    overview\n  }\n": types.MovieBaseFragmentDoc,
    "\n  query GenreList {\n    movieGenres {\n      id\n      name\n    }\n  }\n": types.GenreListDocument,
    "\n  query MoviesLists {\n    movies {\n      results {\n        ...MovieBase\n      }\n    }\n    popularMovies {\n      results {\n        ...MovieBase\n      }\n    }\n    upcomingMovies {\n      results {\n        ...MovieBase\n      }\n    }\n    topMovies {\n      results {\n        ...MovieBase\n      }\n    }\n  }\n": types.MoviesListsDocument,
    "\n  query PopularMovies($input: MoviesQuery) {\n    popularMovies(input: $input) {\n      results {\n        ...MovieBase\n      }\n      pagination {\n        page\n        total_pages\n        total_results\n      }\n    }\n  }\n": types.PopularMoviesDocument,
    "\n  query TopRatedMovies($input: MoviesQuery) {\n    topMovies(input: $input) {\n      results {\n        ...MovieBase\n      }\n      pagination {\n        total_pages\n        total_results\n        page\n      }\n    }\n  }\n": types.TopRatedMoviesDocument,
    "\n  query UpcomingMovies($input: MoviesQuery) {\n    upcomingMovies(input: $input) {\n      results {\n        ...MovieBase\n      }\n      pagination {\n        page\n        total_pages\n        total_results\n      }\n    }\n  }\n": types.UpcomingMoviesDocument,
    "\n  query SearchMovies($query: String!, $page: Int) {\n    searchMovies(query: $query, page: $page) {\n      results {\n        ...MovieBase\n      }\n      pagination {\n        page\n        total_pages\n        total_results\n      }\n    }\n  }\n": types.SearchMoviesDocument,
    "\n  query SimilarMovies($id: ID!, $page: Int) {\n    similarMovies(id: $id, page: $page) {\n      results {\n        ...MovieBase\n      }\n      pagination {\n        page\n        total_pages\n        total_results\n      }\n    }\n  }\n": types.SimilarMoviesDocument,
    "\n  query GetMovie($id: ID!) {\n    movie(id: $id) {\n      id\n      title\n      vote_average\n      vote_count\n      poster_path\n      backdrop_path\n      overview\n    }\n  }\n": types.GetMovieDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation AddToFavorite(\n    $account_id: String!\n    $session_id: String\n    $input: AddFavoriteInput!\n  ) {\n    addFavorite(\n      account_id: $account_id\n      session_id: $session_id\n      input: $input\n    ) {\n      success\n    }\n  }\n"): (typeof documents)["\n  mutation AddToFavorite(\n    $account_id: String!\n    $session_id: String\n    $input: AddFavoriteInput!\n  ) {\n    addFavorite(\n      account_id: $account_id\n      session_id: $session_id\n      input: $input\n    ) {\n      success\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation AddToWatchList(\n    $account_id: String!\n    $session_id: String\n    $input: AddWatchListInput!\n  ) {\n    addWatchList(\n      account_id: $account_id\n      session_id: $session_id\n      input: $input\n    ) {\n      success\n    }\n  }\n"): (typeof documents)["\n  mutation AddToWatchList(\n    $account_id: String!\n    $session_id: String\n    $input: AddWatchListInput!\n  ) {\n    addWatchList(\n      account_id: $account_id\n      session_id: $session_id\n      input: $input\n    ) {\n      success\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetFavorite($account_id: String!, $session_id: String) {\n    favorite(account_id: $account_id, session_id: $session_id) {\n      results {\n        ...MovieBase\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetFavorite($account_id: String!, $session_id: String) {\n    favorite(account_id: $account_id, session_id: $session_id) {\n      results {\n        ...MovieBase\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetWatchList($account_id: String!, $session_id: String) {\n    watchList(account_id: $account_id, session_id: $session_id) {\n      results {\n        ...MovieBase\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetWatchList($account_id: String!, $session_id: String) {\n    watchList(account_id: $account_id, session_id: $session_id) {\n      results {\n        ...MovieBase\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetUser($account_id: String!) {\n    user(account_id: $account_id) {\n      avatar {\n        gravatar {\n          hash\n        }\n        tmdb {\n          avatar_path\n        }\n      }\n      id\n      iso_639_1\n      iso_3166_1\n      name\n      include_adult\n      username\n    }\n  }\n"): (typeof documents)["\n  query GetUser($account_id: String!) {\n    user(account_id: $account_id) {\n      avatar {\n        gravatar {\n          hash\n        }\n        tmdb {\n          avatar_path\n        }\n      }\n      id\n      iso_639_1\n      iso_3166_1\n      name\n      include_adult\n      username\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment MovieBase on Movie {\n    id\n    title\n    vote_average\n    vote_count\n    poster_path\n    backdrop_path\n    overview\n  }\n"): (typeof documents)["\n  fragment MovieBase on Movie {\n    id\n    title\n    vote_average\n    vote_count\n    poster_path\n    backdrop_path\n    overview\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GenreList {\n    movieGenres {\n      id\n      name\n    }\n  }\n"): (typeof documents)["\n  query GenreList {\n    movieGenres {\n      id\n      name\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query MoviesLists {\n    movies {\n      results {\n        ...MovieBase\n      }\n    }\n    popularMovies {\n      results {\n        ...MovieBase\n      }\n    }\n    upcomingMovies {\n      results {\n        ...MovieBase\n      }\n    }\n    topMovies {\n      results {\n        ...MovieBase\n      }\n    }\n  }\n"): (typeof documents)["\n  query MoviesLists {\n    movies {\n      results {\n        ...MovieBase\n      }\n    }\n    popularMovies {\n      results {\n        ...MovieBase\n      }\n    }\n    upcomingMovies {\n      results {\n        ...MovieBase\n      }\n    }\n    topMovies {\n      results {\n        ...MovieBase\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query PopularMovies($input: MoviesQuery) {\n    popularMovies(input: $input) {\n      results {\n        ...MovieBase\n      }\n      pagination {\n        page\n        total_pages\n        total_results\n      }\n    }\n  }\n"): (typeof documents)["\n  query PopularMovies($input: MoviesQuery) {\n    popularMovies(input: $input) {\n      results {\n        ...MovieBase\n      }\n      pagination {\n        page\n        total_pages\n        total_results\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query TopRatedMovies($input: MoviesQuery) {\n    topMovies(input: $input) {\n      results {\n        ...MovieBase\n      }\n      pagination {\n        total_pages\n        total_results\n        page\n      }\n    }\n  }\n"): (typeof documents)["\n  query TopRatedMovies($input: MoviesQuery) {\n    topMovies(input: $input) {\n      results {\n        ...MovieBase\n      }\n      pagination {\n        total_pages\n        total_results\n        page\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query UpcomingMovies($input: MoviesQuery) {\n    upcomingMovies(input: $input) {\n      results {\n        ...MovieBase\n      }\n      pagination {\n        page\n        total_pages\n        total_results\n      }\n    }\n  }\n"): (typeof documents)["\n  query UpcomingMovies($input: MoviesQuery) {\n    upcomingMovies(input: $input) {\n      results {\n        ...MovieBase\n      }\n      pagination {\n        page\n        total_pages\n        total_results\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query SearchMovies($query: String!, $page: Int) {\n    searchMovies(query: $query, page: $page) {\n      results {\n        ...MovieBase\n      }\n      pagination {\n        page\n        total_pages\n        total_results\n      }\n    }\n  }\n"): (typeof documents)["\n  query SearchMovies($query: String!, $page: Int) {\n    searchMovies(query: $query, page: $page) {\n      results {\n        ...MovieBase\n      }\n      pagination {\n        page\n        total_pages\n        total_results\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query SimilarMovies($id: ID!, $page: Int) {\n    similarMovies(id: $id, page: $page) {\n      results {\n        ...MovieBase\n      }\n      pagination {\n        page\n        total_pages\n        total_results\n      }\n    }\n  }\n"): (typeof documents)["\n  query SimilarMovies($id: ID!, $page: Int) {\n    similarMovies(id: $id, page: $page) {\n      results {\n        ...MovieBase\n      }\n      pagination {\n        page\n        total_pages\n        total_results\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetMovie($id: ID!) {\n    movie(id: $id) {\n      id\n      title\n      vote_average\n      vote_count\n      poster_path\n      backdrop_path\n      overview\n    }\n  }\n"): (typeof documents)["\n  query GetMovie($id: ID!) {\n    movie(id: $id) {\n      id\n      title\n      vote_average\n      vote_count\n      poster_path\n      backdrop_path\n      overview\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;