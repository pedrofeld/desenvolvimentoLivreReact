import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../../pages/home";

const router = createBrowserRouter([
    {
      path: "/home",
      element: <HomePage/>,
    },
    {
      path: "/about",
      element: <div>About</div>,
    },
]);

function AppRoutes() {
    return <RouterProvider router={router} />
}

export default AppRoutes;