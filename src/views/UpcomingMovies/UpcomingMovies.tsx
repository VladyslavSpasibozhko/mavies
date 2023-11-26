import { useUpcomingMovies } from "../../features/movies/hooks/useMovies";

export function UpcomingMovies() {
  const data = useUpcomingMovies();

  return <div>{JSON.stringify(data)}</div>;
}
