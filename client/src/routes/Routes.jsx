import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import About from "./../pages/About/About";
import Projects from "../pages/Projects/Projects";
import Resume from "../pages/Resume/Resume";
import SkilledStack from "../pages/skilled/SkilledStack";
import Contact from "../pages/Contact/Contact";
import Blog from "../pages/Blog/Blog";
import ManageProjects from "../pages/AddProject/ManageProjects";
import PrivateRoute from "./PrivateRoute";
import SingleBlog from "../pages/Blog/SingleBlog";
import CatWiseBlogs from "../pages/Blog/CatWiseBlogs";
import ManageBlog from "../pages/Blog/ManageBlog";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/resume",
        element: <Resume />,
      },
      {
        path: "/skill",
        element: <SkilledStack />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/signin",
        element: <Login />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blog/:slug",
        element: <SingleBlog />,
      },
      {
        path: "/blogs/:category",
        element: <CatWiseBlogs />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "/manage-project",
    element: (
      <PrivateRoute>
        <ManageProjects />
      </PrivateRoute>
    ),
  },
  {
    path: "/manage-blogs",
    element: (
      <PrivateRoute>
        <ManageBlog />
      </PrivateRoute>
    ),
  },
]);
