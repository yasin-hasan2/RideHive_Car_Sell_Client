import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Cars from "../pages/Cars";
import Services from "../pages/Services";
import Main from "../layout/main/Main";
// import CarsDetails from "../components/carDetails/CarsDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/cars",
        element: <Cars></Cars>,
      },
      {
        path: "/service",
        element: <Services></Services>,
      },
      //   {
      //     path: "/carDetails/:id",
      //     element: <CarsDetails></CarsDetails>,
      //     loader: ({ params }) =>
      //       fetch(`http://localhost:5000/cars/${params._id}`),
      //   },
    ],
  },
]);
