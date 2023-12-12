import { graphql } from "@api/gql";

export const GET_GENRES = graphql(`
  query GenreList {
    movieGenres {
      id
      name
    }
  }
`);
