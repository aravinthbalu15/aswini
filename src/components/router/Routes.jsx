import { createBrowserRouter } from "react-router-dom";
import Login from "../auth/Login";
import Register from "../auth/Register";
import Home from "../pages/Home";
import ForgotPassword from "../../forgotpassword/ForgotPassword";

const myRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/forgot-password",
    element:<ForgotPassword/>
  },
]);

export default myRoutes;
