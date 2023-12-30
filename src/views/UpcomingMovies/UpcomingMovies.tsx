import { FiltersProvider } from "@features/movies/context/FiltersProvider";
import { MoviesView } from "./components/MoviesView";

export function UpcomingMovies() {
  return (
    <FiltersProvider>
      <MoviesView />
    </FiltersProvider>
  );
}
