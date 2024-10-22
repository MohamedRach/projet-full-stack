import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import VoitureListe from "./components/VoitureList.jsx";
import Voiture from "./components/Voiture.jsx";
import UpdateVoiture from "./components/UpdateVoiture.jsx";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/list",
    element: <VoitureListe />,
  },
  {
    path: "/add",
    element: <Voiture />,
  },
  {
    path: "/update/:id",
    element: <UpdateVoiture />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
