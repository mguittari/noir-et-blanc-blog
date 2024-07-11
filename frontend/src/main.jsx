import React, { useContext, useEffect } from "react";
import ReactDOM from "react-dom/client";

import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import { UserContext, UserProvider } from "./context/userContext";

import App from "./App";
import Article from "./pages/Article/Article";
import SignupPage from "./pages/Signup/SignupPage";
import LoginPage from "./pages/Login/LoginPage";
import Layout from "./components/Layout/Layout";
import WelcomePage from "./pages/Welcome/WelcomePage";
import ForbiddenAccess from "./components/Unauthorized/UnauthorizedAccess";
import UpdateProfilePage from "./pages/Update/UpdateProfilePage";
import UpdatePasswordPage from "./pages/Update/UpdatePasswordPage";
import About from "./pages/About/About";
import ArchivesPage from "./pages/Archives/ArchivesPage";

function AppLayout() {
  return (
    <UserProvider>
      <Layout>
        <Outlet />
      </Layout>
    </UserProvider>
  );
}

function UnauthorizedAccess() {
  const { user, setUser } = useContext(UserContext);

  // on get by id le user connecté grâce à son token
  // si oui, on reçoit isLogged = true
  useEffect(() => {
    fetch("http://localhost:3310/api/me", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        // console.info("privateApp, res, isLogged>> ", res);
        setUser(res);
      })
      .catch((err) => console.info("Error fetching user data:", err));
  }, [localStorage.getItem("token")]);

  console.info("message???", user.message);

  return (
    <UserProvider>
      <Layout>
        {user.message === "isLogged" && <Outlet />}
        {user?.message !== "isLogged" && <ForbiddenAccess />}
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
        path: "/about",
        element: <About />,
      },
      {
        path: "/archives",
        element: <ArchivesPage />,
      },
    ],
  },
  {
    element: <UnauthorizedAccess />,
    children: [
      {
        path: "/welcome",
        element: <WelcomePage />,
      },
      {
        path: "/update",
        element: <UpdateProfilePage />,
      },
      {
        path: "/update-password",
        element: <UpdatePasswordPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>
);
