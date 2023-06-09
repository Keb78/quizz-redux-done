import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "hooks-for-redux";

import QuizzPage from "./QuizzPage";
import AdminPage from "./AdminPage";
import Root from "./Root";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    element: <Root />,
    path: "/",
    children: [
      {
        path: "/",
        element: <QuizzPage />,
      },
      {
        path: "/AdminPage",
        element: <AdminPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
