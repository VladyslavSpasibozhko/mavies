import { MainLayout } from "../layout/MainLayout";
import { TopRatedMovies as TopRatedMoviesView } from "../views/TopRatedMovies";

export function TopRatedMovies() {
  return (
    <MainLayout>
      <TopRatedMoviesView />
    </MainLayout>
  );
}
