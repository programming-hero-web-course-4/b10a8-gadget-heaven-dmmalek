import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "././layout/MainLayout";
import Home from "./pages/Home";
import ErrorPage from "./components/ErrorPage";
import Statistics from "./pages/Statistics";
import Dashboard from "./pages/Dashboard";
import ProductCards from "./components/Gadgets/ProductCards";
import ProductDetails from "./components/Gadgets/ProductDetails";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../categories.json"),
        children: [
          {
            path: "/",
            element: <ProductCards></ProductCards>,
            loader: () => fetch("../product.json"),
          },
          {
            path: "/productscards/:category",
            element: <ProductCards></ProductCards>,
            loader: () => fetch("../product.json"),
          },
          {
            path: "/products/:id",
            element: <ProductDetails></ProductDetails>,
            loader: () => fetch("../product.json"),
          },
        ],
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
