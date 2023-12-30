import { graphql } from "@api/config";

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
