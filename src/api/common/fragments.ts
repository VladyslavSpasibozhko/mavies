import { graphql } from "@api/gql";

export const MovieBaseFragment = graphql(`
  fragment MovieBase on Movie {
    id
    title
    vote_average
    vote_count
    poster_path
    backdrop_path
    overview
  }
`);
