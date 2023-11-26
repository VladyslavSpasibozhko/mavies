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

export function getMovies({ token }: RequestTokens) {
  return gqlRequest<GetMoviesRes>({
    document: GET_MOVIES,
    requestHeaders: {
      authorization: `Bearer ${token}`,
    },
  });
}

export function getMovie({ token, id }: RequestTokens & { id: string }) {
  return gqlRequest<{ movie: MovieDetailed }>({
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
}: RequestTokens & { input?: MoviesQuery }) {
  return gqlRequest<{ popularMovies: MovieWithPagination }>({
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
}: RequestTokens & { input?: MoviesQuery }) {
  return gqlRequest<{ topMovies: MovieWithPagination }>({
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
}: RequestTokens & { input?: MoviesQuery }) {
  return gqlRequest<{ upcomingMovies: MovieWithPagination }>({
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
}: RequestTokens & { id: number; page?: number }) {
  return gqlRequest<{ similarMovies: MovieWithPagination }>({
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
}: RequestTokens & { query: string; page?: number }) {
  return gqlRequest<{ searchMovies: MovieWithPagination }>({
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
