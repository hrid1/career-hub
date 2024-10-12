import { createBrowserRouter } from "react-router-dom";
import Layout from "../Pages/Layout/Layout";
import Home from "../Pages/Home/Home";
import AppliedJobs from "../Pages/AppliedJobs/AppliedJobs";
import Statistics from "../Pages/Statistics/Statistics";
import BlogPage from "../Pages/BlogPage/BlogPage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/appliedjobs",
        element: <AppliedJobs></AppliedJobs>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>
      },
      {
        path: "/blogs",
        element: <BlogPage></BlogPage>
      }
    ],
  },
]);
