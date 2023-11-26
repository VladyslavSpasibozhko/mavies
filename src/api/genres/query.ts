import { gql } from "graphql-request";

export const GET_GENRES = gql`
  query GenreList {
    movieGenres {
      id
      name
    }
  }
`;
