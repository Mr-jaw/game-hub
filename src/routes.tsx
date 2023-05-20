import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomPage from "./pages/HomPage";
import GameDetailPage from "./pages/GameDetailPage";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomPage />,
      },
      {
        path: "/games/:slug",
        element: <GameDetailPage />,
      },
    ],
  },
]);

export default router;
