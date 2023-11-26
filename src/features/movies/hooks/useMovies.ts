import useSWR from "swr";
import { useAuthContext } from "../../../context/AuthContext";
import {
  getMovie,
  getMovies,
  getPopularMovies,
  getSimilarMovies,
  getTopRatedMovies,
  getUpcomingMovies,
  searchMovies,
} from "../../../api/movies";
import {
  GET_MOVIE,
  GET_MOVIES,
  GET_POPULAR_MOVIES,
  GET_SIMILAR_MOVIES,
  GET_TOP_RATED_MOVIES,
  GET_UPCOMING_MOVIES,
} from "../../../api/movies/query";
import { useRef, useState } from "react";

export function useMovie(id?: string) {
  const auth = useAuthContext();

  return useSWR<{
    movie: MovieDetailed;
  }>(id ? [GET_MOVIE, id] : null, () => {
    return getMovie({
      accountId: auth.accountId,
      sessionId: auth.sessionId,
      token: auth.accessToken,
      id: id as string,
    });
  });
}

export function useMovies() {
  const auth = useAuthContext();

  return useSWR<GetMoviesRes>(GET_MOVIES, () => {
    return getMovies({
      accountId: auth.accountId,
      sessionId: auth.sessionId,
      token: auth.accessToken,
    });
  });
}

export function usePopularMovies() {
  const [query, setQuery] = useState<MoviesQuery>();

  const auth = useAuthContext();

  const store = useSWR(
    [GET_POPULAR_MOVIES, query],
    () => {
      return getPopularMovies({
        token: auth.accessToken,
        accountId: auth.accountId,
        sessionId: auth.sessionId,
        input: query,
      });
    },
    {}
  );

  return {
    ...store,
    async refetch(query?: MoviesQuery) {
      setQuery(query);
    },
  };
}

export function useTopRatedMovies() {
  const [query, setQuery] = useState<MoviesQuery>();

  const auth = useAuthContext();

  const store = useSWR(
    [GET_TOP_RATED_MOVIES, query],
    () => {
      return getTopRatedMovies({
        token: auth.accessToken,
        accountId: auth.accountId,
        sessionId: auth.sessionId,
        input: query,
      });
    },
    {}
  );

  return {
    ...store,
    async refetch(query?: MoviesQuery) {
      setQuery(query);
    },
  };
}

export function useUpcomingMovies() {
  const [query, setQuery] = useState<MoviesQuery>();

  const auth = useAuthContext();

  const store = useSWR(
    [GET_UPCOMING_MOVIES, query],
    () => {
      return getUpcomingMovies({
        token: auth.accessToken,
        accountId: auth.accountId,
        sessionId: auth.sessionId,
        input: query,
      });
    },
    {}
  );

  return {
    ...store,
    async refetch(query?: MoviesQuery) {
      setQuery(query);
    },
  };
}

export function useSimilarMovies(id: number) {
  const auth = useAuthContext();

  const store = useSWR(
    [GET_SIMILAR_MOVIES, id],
    () => {
      return getSimilarMovies({
        token: auth.accessToken,
        accountId: auth.accountId,
        sessionId: auth.sessionId,
        id,
      });
    },
    {}
  );

  return store;
}

export function useSearchMovies() {
  const timer = useRef<unknown>();
  const auth = useAuthContext();

  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState<MovieBase[]>([]);
  const [pagination, setPagination] = useState<Pagination>({
    page: 0,
    total_pages: 0,
    total_results: 0,
  });

  async function fetch(search: string, page?: number) {
    setIsLoading(true);

    const res = await searchMovies({
      token: auth.accessToken,
      accountId: auth.accountId,
      sessionId: auth.sessionId,
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
