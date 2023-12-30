import { FiltersProvider } from "@features/movies/context/FiltersProvider";
import { MoviesView } from "./components/MoviesView";

export function TopRatedMovies() {
  return (
    <FiltersProvider>
      <MoviesView />
    </FiltersProvider>
  );
}
