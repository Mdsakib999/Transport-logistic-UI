import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Home } from "../Pages/Home";
import { Error404 } from "../Components/SharedComponent/Error404";
import { Blogs } from "../Pages/Blogs";
import { BlogDetails } from "../Pages/BlogDetails";
import { About } from "../Pages/About";
import { Contact } from "../Pages/Contact";
import { Services } from "../Pages/Services";
import { Pricing } from "../Pages/Pricing";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog",
        element: <Blogs />,
      },
      {
        path: "/blog/:id",
        element: <BlogDetails />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/pricing",
        element: <Pricing />,
      },
    ],
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);
