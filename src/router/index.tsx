import Layout from "./layout";
import Home from "../pages/Home";
import RegisterForm from "../pages/Register";
import LoginForm from "../pages/Login";
import Profile from "../pages/Profile";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "register", element: <RegisterForm /> },
      { path: "login", element: <LoginForm /> },
    ],
  },
  { path: "/profiles/:name", element: <Profile /> },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
