import { createBrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ToolesLayout } from "./layouts";
import { Tooles } from "./views/tooles";
import { Home } from "./views/home";
import { ApiRest } from "./views/api-rest";
import { Swapi } from "./views/swapi/Swapi";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/api-rest",
    element: (
      <>
        <ApiRest />
        <ToastContainer />
      </>
    ),
  },
  {
    path: "/swapi",
    element: <Swapi />,
  },
  {
    path: "/tooles",
    element: <ToolesLayout />,
    children: [
      {
        index: true,
        element: <Tooles />,
      },
    ],
  },
]);

export default router;
