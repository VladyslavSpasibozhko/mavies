import { gql } from "graphql-request";

export const MovieBaseFragment = gql`
  fragment MovieBase on Movie {
    id
    title
    vote_average
    vote_count
    poster_path
    backdrop_path
    overview
  }
`;

export const MoviePagination = gql`
  fragment MoviePagination on Pagination {
    page
    total_pages
    total_results
  }
`;

export const MovieDetailedFragment = gql`
  fragment MovieDetails on MovieDetailed {
    adult
    backdrop_path
    budget
    genres {
      id
      name
    }
    homepage
    id
    imdb_id
    original_language
    original_title
    overview
    popularity
    poster_path
    release_date
    revenue
    runtime
    status
    tagline
    title
    video
    vote_average
    vote_count
  }
`;
