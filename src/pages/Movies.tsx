import { MainLayout } from "../layout/MainLayout/MainLayout";
import { Movies as MoviesView } from "../views/Movies";

export function Movies() {
  return (
    <MainLayout>
      <MoviesView />
    </MainLayout>
  );
}
