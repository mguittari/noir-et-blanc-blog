import React from "react";
import ReactDOM from "react-dom/client";

import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import { UserProvider } from "./context/userContext";

import App from "./App";
import Article from "./pages/Article/Article";
import SignupPage from "./pages/Signup/SignupPage";
import LoginPage from "./pages/Login/LoginPage";
import Layout from "./components/Layout/Layout";
import WelcomePage from "./pages/Welcome/WelcomePage";

function AppLayout() {
  return (
    <UserProvider>
      <Layout>
        <Outlet />
      </Layout>
    </UserProvider>
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
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/welcome",
        element: <WelcomePage />,
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
