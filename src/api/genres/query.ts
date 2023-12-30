import { graphql } from "@api/config";

export const GET_GENRES = graphql(`
  query GenreList {
    movieGenres {
      id
      name
    }
  }
`);
