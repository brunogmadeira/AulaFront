import { createBrowserRouter } from "react-router-dom";
import { Login } from "./components/Login";
import { Profile } from "./components/Profile";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
  ]);