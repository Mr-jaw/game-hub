import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomPage from "./pages/HomPage";
import GameDetailPage from "./pages/GameDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomPage />,
      },
      {
        path: "/games/:id",
        element: <GameDetailPage />,
      },
    ],
  },
]);

export default router;
