import { createBrowserRouter } from "react-router-dom";
import Bookmark from "./pages/bookmark";
import Error from "./pages/error";
import Home from "./pages/home";
import Movie from "./pages/movie";
import TvSeries from "./pages/tv-series";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/movies",
    element: <Movie />,
    errorElement: <Error />,
  },
  {
    path: "/tv-series",
    element: <TvSeries />,
    errorElement: <Error />,
  },
  {
    path: "/bookmarks",
    element: <Bookmark />,
    errorElement: <Error />,
  },
]);
