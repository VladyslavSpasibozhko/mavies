import {
  GetMovieQuery,
  GetMovieQueryVariables,
  MoviesListsQuery,
  PopularMoviesQuery,
  PopularMoviesQueryVariables,
  SearchMoviesQuery,
  SearchMoviesQueryVariables,
  SimilarMoviesQuery,
  SimilarMoviesQueryVariables,
  TopRatedMoviesQuery,
  TopRatedMoviesQueryVariables,
  UpcomingMoviesQuery,
  UpcomingMoviesQueryVariables,
} from "@api/gql/graphql";
import { gqlRequest } from "../request";
import {
  GET_MOVIE,
  GET_MOVIES,
  GET_POPULAR_MOVIES,
  GET_SIMILAR_MOVIES,
  GET_TOP_RATED_MOVIES,
  GET_UPCOMING_MOVIES,
  SEARCH_MOVIES,
} from "./query";

export function getMovies({ token }: { token: string | null }) {
  return gqlRequest<MoviesListsQuery>({
    document: GET_MOVIES,
    requestHeaders: {
      authorization: `Bearer ${token}`,
    },
  });
}

export function getMovie({
  token,
  id,
}: GetMovieQueryVariables & { token: string | null }) {
  return gqlRequest<GetMovieQuery>({
    document: GET_MOVIE,
    requestHeaders: {
      authorization: `Bearer ${token}`,
    },
    variables: { id },
  });
}

export function getPopularMovies({
  token,
  input,
}: PopularMoviesQueryVariables & { token: string | null }) {
  return gqlRequest<PopularMoviesQuery>({
    document: GET_POPULAR_MOVIES,
    requestHeaders: {
      authorization: `Bearer ${token}`,
    },
    variables: {
      input,
    },
  });
}

export function getTopRatedMovies({
  token,
  input,
}: TopRatedMoviesQueryVariables & { token: string | null }) {
  return gqlRequest<TopRatedMoviesQuery>({
    document: GET_TOP_RATED_MOVIES,
    requestHeaders: {
      authorization: `Bearer ${token}`,
    },
    variables: {
      input,
    },
  });
}

export function getUpcomingMovies({
  token,
  input,
}: UpcomingMoviesQueryVariables & { token: string | null }) {
  return gqlRequest<UpcomingMoviesQuery>({
    document: GET_UPCOMING_MOVIES,
    requestHeaders: {
      authorization: `Bearer ${token}`,
    },
    variables: {
      input,
    },
  });
}

export function getSimilarMovies({
  token,
  id,
  page,
}: SimilarMoviesQueryVariables & { token: string | null }) {
  return gqlRequest<SimilarMoviesQuery>({
    document: GET_SIMILAR_MOVIES,
    requestHeaders: {
      authorization: `Bearer ${token}`,
    },
    variables: {
      id,
      page,
    },
  });
}

export function searchMovies({
  token,
  query,
  page,
}: SearchMoviesQueryVariables & { token: string | null }) {
  return gqlRequest<SearchMoviesQuery>({
    document: SEARCH_MOVIES,
    requestHeaders: {
      authorization: `Bearer ${token}`,
    },
    variables: {
      query,
      page,
    },
  });
}
