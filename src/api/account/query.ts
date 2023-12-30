import { graphql } from "@api/config";

export const ADD_TO_FAVORITE = graphql(`
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
`);

export const ADD_TO_WATCH_LIST = graphql(`
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
`);

export const GET_FAVORITE = graphql(`
  query GetFavorite($account_id: String!, $session_id: String) {
    favorite(account_id: $account_id, session_id: $session_id) {
      results {
        ...MovieBase
      }
    }
  }
`);

export const GET_WATCH_LIST = graphql(`
  query GetWatchList($account_id: String!, $session_id: String) {
    watchList(account_id: $account_id, session_id: $session_id) {
      results {
        ...MovieBase
      }
    }
  }
`);

export const GET_USER = graphql(`
  query GetUser($account_id: String!) {
    user(account_id: $account_id) {
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
  }
`);
