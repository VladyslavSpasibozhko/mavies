import { useState } from "react";

type Voting = {
  min: string | number;
  max: string | number;
};

// TODO: Save data to url
// TODO: Create context for sharing data between components
export function useFilters() {
  const [page, setPage] = useState(1);

  const [voting, setVoting] = useState<Voting>({ min: 0, max: 10 });
  const [withGenres, setWithGenres] = useState<Genre[]>([]);
  const [withoutGenres, setWithoutGenres] = useState<Genre[]>([]);

  function onSetVoting(type: "min" | "max", value: string | number) {
    setVoting((voting) => {
      return { ...voting, [type]: value };
    });
  }

  function onSetWithGenres(genres: Genre[]) {
    setWithGenres(genres);
  }

  function onSetWithoutGenres(genres: Genre[]) {
    setWithoutGenres(genres);
  }

  function query() {
    const _query: MoviesQuery = {
      page,
    };

    if (typeof voting.min === "number") {
      _query.vote_average_min = voting.min;
    }

    if (typeof voting.max === "number") {
      _query.vote_average_max = voting.max;
    }

    if (withGenres.length) {
      _query.with_genres = withGenres.map((g) => g.id);
    }

    if (withoutGenres.length) {
      _query.without_genres = withoutGenres.map((g) => g.id);
    }

    return _query;
  }

  return {
    voting,
    withGenres,
    withoutGenres,
    onSetVoting,
    onSetWithGenres,
    onSetWithoutGenres,
    onSetPage: (value: number) => setPage(value),
    query: query(),
  };
}
