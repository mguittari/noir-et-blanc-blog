import React from "react";
import ReactDOM from "react-dom/client";

import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Article from "./pages/Article/Article";
import SignupPage from "./pages/Signup/SignupPage";
import Layout from "./components/Layout/Layout";

function AppLayout() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/article/:id",
        element: <Article />,
      },
      {
        path: "/signup",
        element: <SignupPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
