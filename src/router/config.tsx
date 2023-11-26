import { createBrowserRouter, RouteObject } from "react-router-dom";
import { EnterPage } from "../pages/EnterPage";
import { ApprovePage } from "../pages/ApprovePage";
import { Root } from "../pages/Root";
import { Auth } from "../pages/Auth";
import { Movies } from "../pages/Movies";
import { PopularMoviesPage } from "../pages/PopularMovies";
import { Movie } from "../pages/Movie";
import { AccountMovies } from "../pages/AccountMovies";
import { UpcomingMovies } from "../pages/UpcomingMovies";
import { TopRatedMovies } from "../pages/TopRatedMovies";

// TODO: create urls object
// TODO: lazy load pages
const routes: RouteObject[] = [
  {
    path: "/",
    children: [
      {
        path: "movies",
        children: [],
        element: <Movies />,
      },
      {
        path: "movies/:id",
        element: <Movie />,
      },
      {
        path: "movies/popular",
        element: <PopularMoviesPage />,
      },
      {
        path: "movies/top-rated",
        element: <TopRatedMovies />,
      },
      {
        path: "movies/upcoming",
        element: <UpcomingMovies />,
      },
      {
        path: "movies/account",
        element: <AccountMovies />,
      },
      {
        path: "auth",
        element: <Auth />,
        children: [
          {
            path: "entry",
            element: <EnterPage />,
          },
          {
            path: "approve",
            element: <ApprovePage />,
          },
        ],
      },
    ],
    element: <Root />,
  },
];

export const router = createBrowserRouter(routes);
