import {
  AddToFavoriteMutation,
  AddToFavoriteMutationVariables,
  AddToWatchListMutation,
  AddToWatchListMutationVariables,
  GetFavoriteQuery,
  GetFavoriteQueryVariables,
  GetUserQuery,
  GetUserQueryVariables,
  GetWatchListQuery,
  GetWatchListQueryVariables,
} from "@api/gql/graphql";
import { gqlRequest } from "../request";
import {
  ADD_TO_FAVORITE,
  ADD_TO_WATCH_LIST,
  GET_FAVORITE,
  GET_USER,
  GET_WATCH_LIST,
} from "./query";

export function getUser({
  account_id,
  token,
}: GetUserQueryVariables & { token: string | null }) {
  return gqlRequest<GetUserQuery>({
    document: GET_USER,
    requestHeaders: {
      authorization: `Bearer ${token}`,
    },
    variables: {
      account_id,
    },
  });
}

export function getFavoriteMovies({
  token,
  account_id,
  session_id,
}: GetFavoriteQueryVariables & { token: string | null }) {
  return gqlRequest<GetFavoriteQuery>({
    document: GET_FAVORITE,
    requestHeaders: {
      authorization: `Bearer ${token}`,
    },
    variables: {
      account_id,
      session_id,
    },
  });
}

export function getWatchListMovies({
  token,
  account_id,
  session_id,
}: GetWatchListQueryVariables & { token: string | null }) {
  return gqlRequest<GetWatchListQuery>({
    document: GET_WATCH_LIST,
    requestHeaders: {
      authorization: `Bearer ${token}`,
    },
    variables: {
      account_id,
      session_id,
    },
  });
}

export function addFavorite({
  session_id,
  account_id,
  input,
  token,
}: AddToFavoriteMutationVariables & { token: string | null }) {
  return gqlRequest<AddToFavoriteMutation>({
    document: ADD_TO_FAVORITE,
    requestHeaders: {
      authorization: `Bearer ${token}`,
    },
    variables: {
      account_id,
      session_id,
      input,
    },
  });
}

export function addWatchList({
  input,
  token,
  account_id,
  session_id,
}: AddToWatchListMutationVariables & { token: string | null }) {
  return gqlRequest<AddToWatchListMutation>({
    document: ADD_TO_WATCH_LIST,
    requestHeaders: {
      authorization: `Bearer ${token}`,
    },
    variables: {
      account_id,
      session_id,
      input,
    },
  });
}
