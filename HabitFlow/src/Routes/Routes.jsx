import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import Habits from "../Pages/Habits/Habits";
import NotFound from "../Pages/404Page/NotFound";
import UserProfile from "../Pages/Profiles/UserProfile";
import CreateHabit from "../Pages/HabitInput/CreateHabit";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import ProtectedRoute from "./ProtectedRoute";
import AboutUs from "../Pages/AboutUs/AboutUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "/habits",
        element:  <ProtectedRoute>
          <Habits />
        </ProtectedRoute> ,
      },
      {
        path: "/profile",
        element: (
          <ProtectedRoute>
            <UserProfile />
          </ProtectedRoute>
        ),
      },
      {
        path: "/create-habits",
        element: (
          <ProtectedRoute>
            <CreateHabit />
          </ProtectedRoute>
        ),
      },
      {
          path:"/about-us",
          element:<ProtectedRoute>
            <AboutUs/>
          </ProtectedRoute>
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "/signUp",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
