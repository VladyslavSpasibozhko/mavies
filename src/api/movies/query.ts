/* eslint-disable react-refresh/only-export-components */
import { gql } from "graphql-request";
import {
  MovieBaseFragment,
  MovieDetailedFragment,
  MoviePagination,
} from "../common/fragments";

export const GET_MOVIES = gql`
  ${MovieBaseFragment}

  query MoviesLists {
    movies {
      results {
        ...MovieBase
      }
    }
    popularMovies {
      results {
        ...MovieBase
      }
    }
    upcomingMovies {
      results {
        ...MovieBase
      }
    }
    topMovies {
      results {
        ...MovieBase
      }
    }
  }
`;

export const GET_POPULAR_MOVIES = gql`
  ${MovieBaseFragment}
  ${MoviePagination}

  query PopularMovies($input: MoviesQuery) {
    popularMovies(input: $input) {
      results {
        ...MovieBase
      }
      pagination {
        ...MoviePagination
      }
    }
  }
`;

export const GET_TOP_RATED_MOVIES = gql`
  ${MovieBaseFragment}
  ${MoviePagination}

  query TopRatedMovies($input: MoviesQuery) {
    topMovies(input: $input) {
      results {
        ...MovieBase
      }
      pagination {
        ...MoviePagination
      }
    }
  }
`;

export const GET_UPCOMING_MOVIES = gql`
  ${MovieBaseFragment}
  ${MoviePagination}

  query UpcomingMovies($input: MoviesQuery) {
    upcomingMovies(input: $input) {
      results {
        ...MovieBase
      }
      pagination {
        ...MoviePagination
      }
    }
  }
`;

export const SEARCH_MOVIES = gql`
  ${MovieBaseFragment}
  ${MoviePagination}

  query SearchMovies($query: String!, $page: Int) {
    searchMovies(query: $query, page: $page) {
      results {
        ...MovieBase
      }
      pagination {
        ...MoviePagination
      }
    }
  }
`;

export const GET_SIMILAR_MOVIES = gql`
  ${MovieBaseFragment}
  ${MoviePagination}

  query SimilarMovies($id: ID!, $page: Int) {
    similarMovies(id: $id, page: $page) {
      results {
        ...MovieBase
      }
      pagination {
        ...MoviePagination
      }
    }
  }
`;

export const GET_MOVIE = gql`
  ${MovieDetailedFragment}

  query GetMovie($id: ID!) {
    movie(id: $id) {
      ...MovieDetails
    }
  }
`;
