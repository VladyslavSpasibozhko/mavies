import { gqlRequest } from "../request";
import {
  ADD_TO_FAVORITE,
  ADD_TO_WATCH_LIST,
  GET_FAVORITE,
  GET_USER,
  GET_WATCH_LIST,
} from "./query";

export function getUser({ accountId, sessionId, token }: RequestTokens) {
  return gqlRequest<{ user: User }>({
    document: GET_USER,
    requestHeaders: {
      authorization: `Bearer ${token}`,
    },
    variables: {
      account_id: accountId,
      session_id: sessionId,
    },
  });
}

export function getFavoriteMovies({
  token,
  accountId,
  sessionId,
}: RequestTokens) {
  return gqlRequest<GetFavMovies>({
    document: GET_FAVORITE,
    requestHeaders: {
      authorization: `Bearer ${token}`,
    },
    variables: {
      account_id: accountId,
      session_id: sessionId,
    },
  });
}

export function getWatchListMovies({
  token,
  accountId,
  sessionId,
}: RequestTokens) {
  return gqlRequest<GetWatchListMovies>({
    document: GET_WATCH_LIST,
    requestHeaders: {
      authorization: `Bearer ${token}`,
    },
    variables: {
      account_id: accountId,
      session_id: sessionId,
    },
  });
}

export function addFavorite({
  accountId,
  sessionId,
  input,
  token,
}: RequestTokens & { input: AddFavoriteInput }) {
  return gqlRequest<AddFavoriteRes>({
    document: ADD_TO_FAVORITE,
    requestHeaders: {
      authorization: `Bearer ${token}`,
    },
    variables: {
      account_id: accountId,
      session_id: sessionId,
      input,
    },
  });
}

export function addWatchList({
  accountId,
  sessionId,
  input,
  token,
}: RequestTokens & { input: AddWatchListInput }) {
  return gqlRequest<AddWatchListRes>({
    document: ADD_TO_WATCH_LIST,
    requestHeaders: {
      authorization: `Bearer ${token}`,
    },
    variables: {
      account_id: accountId,
      session_id: sessionId,
      input,
    },
  });
}
