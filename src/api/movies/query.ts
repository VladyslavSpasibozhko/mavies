import { graphql } from "@api/gql";

export const GET_MOVIES = graphql(`
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
`);

export const GET_POPULAR_MOVIES = graphql(`
  query PopularMovies($input: MoviesQuery) {
    popularMovies(input: $input) {
      results {
        ...MovieBase
      }
      pagination {
        page
        total_pages
        total_results
      }
    }
  }
`);

export const GET_TOP_RATED_MOVIES = graphql(`
  query TopRatedMovies($input: MoviesQuery) {
    topMovies(input: $input) {
      results {
        ...MovieBase
      }
      pagination {
        total_pages
        total_results
        page
      }
    }
  }
`);

export const GET_UPCOMING_MOVIES = graphql(`
  query UpcomingMovies($input: MoviesQuery) {
    upcomingMovies(input: $input) {
      results {
        ...MovieBase
      }
      pagination {
        page
        total_pages
        total_results
      }
    }
  }
`);

export const SEARCH_MOVIES = graphql(`
  query SearchMovies($query: String!, $page: Int) {
    searchMovies(query: $query, page: $page) {
      results {
        ...MovieBase
      }
      pagination {
        page
        total_pages
        total_results
      }
    }
  }
`);

export const GET_SIMILAR_MOVIES = graphql(`
  query SimilarMovies($id: ID!, $page: Int) {
    similarMovies(id: $id, page: $page) {
      results {
        ...MovieBase
      }
      pagination {
        page
        total_pages
        total_results
      }
    }
  }
`);

// TODO: FIX
export const GET_MOVIE = graphql(`
  query GetMovie($id: ID!) {
    movie(id: $id) {
      id
      title
      vote_average
      vote_count
      poster_path
      backdrop_path
      overview
    }
  }
`);
