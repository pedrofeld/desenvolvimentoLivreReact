import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../../pages/Home";
import PricesPage from "../../pages/Prices";
import ServicesPage from "../../pages/Services";

const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage/>,
    },
    {
        path: "/services",
        element: <ServicesPage/>,
    },
    {
      path: "/prices",
      element: <PricesPage/>,
    },
]);

function AppRoutes() {
    return <RouterProvider router={router} />
}

export default AppRoutes;