import { FiltersProvider } from "@features/movies/context/FiltersProvider";
import { MoviesView } from "./components/MoviesView";

export function PopularMovies() {
  return (
    <FiltersProvider>
      <MoviesView />
    </FiltersProvider>
  );
}
