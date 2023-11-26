import { MainLayout } from "../layout/MainLayout";
import { UpcomingMovies as UpcomingMoviesView } from "../views/UpcomingMovies";

export function UpcomingMovies() {
  return (
    <MainLayout>
      <UpcomingMoviesView />
    </MainLayout>
  );
}
