/* eslint-disable react-refresh/only-export-components */
import { gql } from "graphql-request";
import { MovieBaseFragment } from "../common/fragments";

const UserFragment = gql`
  fragment User on UserResponse {
    avatar {
      gravatar {
        hash
      }
      tmdb {
        avatar_path
      }
    }
    id
    iso_639_1
    iso_3166_1
    name
    include_adult
    username
  }
`;

export const ADD_TO_FAVORITE = gql`
  mutation AddToFavorite(
    $account_id: String!
    $session_id: String
    $input: AddFavoriteInput!
  ) {
    addFavorite(
      account_id: $account_id
      session_id: $session_id
      input: $input
    ) {
      success
    }
  }
`;

export const ADD_TO_WATCH_LIST = gql`
  mutation AddToWatchList(
    $account_id: String!
    $session_id: String
    $input: AddWatchListInput!
  ) {
    addWatchList(
      account_id: $account_id
      session_id: $session_id
      input: $input
    ) {
      success
    }
  }
`;

export const GET_FAVORITE = gql`
  ${MovieBaseFragment}

  query GetFavorite($account_id: String!, $session_id: String) {
    favorite(account_id: $account_id, session_id: $session_id) {
      results {
        ...MovieBase
      }
    }
  }
`;

export const GET_WATCH_LIST = gql`
  ${MovieBaseFragment}

  query GetWatchList($account_id: String!, $session_id: String) {
    watchList(account_id: $account_id, session_id: $session_id) {
      results {
        ...MovieBase
      }
    }
  }
`;

export const GET_USER = gql`
  ${UserFragment}
  query GetUser($account_id: String!) {
    user(account_id: $account_id) {
      ...User
    }
  }
`;
