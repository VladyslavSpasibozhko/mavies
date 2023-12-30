import useSWR from "swr";
import { useRef, useState } from "react";
import { useAuthContext } from "@context/AuthContext";
import {
  GET_MOVIE,
  GET_MOVIES,
  GET_POPULAR_MOVIES,
  GET_SIMILAR_MOVIES,
  GET_TOP_RATED_MOVIES,
  GET_UPCOMING_MOVIES,
} from "@api/movies/query";
import {
  getMovie,
  getMovies,
  getPopularMovies,
  getSimilarMovies,
  getTopRatedMovies,
  getUpcomingMovies,
  searchMovies,
} from "@api/movies";
import {
  Pagination,
  PopularMoviesQuery,
  SearchMoviesQuery,
  TopRatedMoviesQuery,
  UpcomingMoviesQuery,
} from "@api/config/graphql";

export function useMovie(id?: string) {
  const auth = useAuthContext();

  return useSWR(id ? [GET_MOVIE, id] : null, () => {
    return getMovie({
      token: auth.accessToken,
      id: id as string,
    });
  });
}

export function useMovies() {
  const auth = useAuthContext();

  return useSWR(GET_MOVIES, () => {
    return getMovies({
      token: auth.accessToken,
    });
  });
}

export function usePopularMovies(query?: MoviesQuery) {
  const defaultData: PopularMoviesQuery = {
    popularMovies: {
      results: [],
      pagination: {
        page: 0,
        total_pages: 0,
        total_results: 0,
      },
    },
  };

  const auth = useAuthContext();

  const store = useSWR(
    [GET_POPULAR_MOVIES, query],
    () => {
      return getPopularMovies({
        token: auth.accessToken,
        input: query,
      });
    },
    {}
  );

  return {
    ...store,
    noResults: !store.isLoading && !store.data?.popularMovies.results.length,
    data: store.data ? store.data : defaultData,
  };
}

export function useTopRatedMovies(query?: MoviesQuery) {
  const defaultData: TopRatedMoviesQuery = {
    topMovies: {
      results: [],
      pagination: {
        page: 0,
        total_pages: 0,
        total_results: 0,
      },
    },
  };

  const auth = useAuthContext();

  const store = useSWR(
    [GET_TOP_RATED_MOVIES, query],
    () =>
      getTopRatedMovies({
        token: auth.accessToken,
        input: query,
      }),
    {}
  );

  return {
    ...store,
    noResults: !store.isLoading && !store.data?.topMovies.results.length,
    data: store.data ?? defaultData,
  };
}

export function useUpcomingMovies(query?: MoviesQuery) {
  const defaultData: UpcomingMoviesQuery = {
    upcomingMovies: {
      results: [],
      pagination: {
        page: 0,
        total_pages: 0,
        total_results: 0,
      },
    },
  };

  const auth = useAuthContext();

  const store = useSWR(
    [GET_UPCOMING_MOVIES, query],
    () => {
      return getUpcomingMovies({
        token: auth.accessToken,
        input: query,
      });
    },
    {}
  );

  return {
    ...store,
    noResults: !store.isLoading && !store.data?.upcomingMovies.results.length,
    data: store.data ?? defaultData,
  };
}

export function useSimilarMovies(id: number) {
  const auth = useAuthContext();

  const store = useSWR(
    [GET_SIMILAR_MOVIES, id],
    () =>
      getSimilarMovies({
        token: auth.accessToken,
        id: id.toString(),
      }),
    {}
  );

  return store;
}

export function useSearchMovies() {
  const timer = useRef<unknown>();
  const auth = useAuthContext();

  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState<
    SearchMoviesQuery["searchMovies"]["results"]
  >([]);
  const [pagination, setPagination] = useState<Pagination>({
    page: 0,
    total_pages: 0,
    total_results: 0,
  });

  async function fetch(search: string, page?: number) {
    setIsLoading(true);

    const res = await searchMovies({
      token: auth.accessToken,
      query: search,
      page,
    });

    if (res.searchMovies) {
      setMovies(res.searchMovies.results);
      setPagination(res.searchMovies.pagination);
    }

    setIsLoading(false);
  }

  async function fetchDebounce(search: string, page?: number) {
    if (timer.current) clearTimeout(timer.current as number);
    timer.current = setTimeout(() => fetch(search, page), 300);
  }

  return {
    isLoading,
    data: {
      movies,
      pagination,
    },
    fetch,
    fetchDebounce,
  };
}
