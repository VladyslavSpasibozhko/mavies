import { useTopRatedMovies } from "../../features/movies/hooks/useMovies";

export function TopRatedMovies() {
  const data = useTopRatedMovies();

  return <div>{JSON.stringify(data)}</div>;
}
