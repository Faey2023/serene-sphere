import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./components/Home/Home";
import MainPage from "./layout/MainPage";
import AuthProvider from "./Provider/AuthProvider";
import Register from "./components/Authentication/Registration/Register";
import Login from "./components/Authentication/Login/Login";
import { Toaster } from "react-hot-toast";
import Private from "./Provider/Private";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Private>
        <MainPage />
      </Private>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <Toaster />
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
