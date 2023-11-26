import { MainLayout } from "../layout/MainLayout/MainLayout";
import { MovieView } from "../views/Movie";

export function Movie() {
  return (
    <MainLayout>
      <MovieView />
    </MainLayout>
  );
}
