import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthLayout from "./components/auth/layout.jsx";
import AuthLogin from "./pages/auth/Login.jsx";
import AuthRegister from "./pages/auth/Register.jsx";
import AdminLayout from "./components/admin/layout.jsx";
import AdminDashboard from "./pages/admin/dashboard.jsx";
import AdminFeatures from "./pages/admin/features.jsx";
import AdminOrders from "./pages/admin/orders.jsx";
import AdminProducts from "./pages/admin/products.jsx";
import ShoppingLayout from "./components/shopping/layout.jsx";
import NotFound from "./pages/not-found/index.jsx";
import ShoppingHome from "./pages/shopping/home.jsx";
import ShoppingListing from "./pages/shopping/listing.jsx";
import ShoppingAccount from "./pages/shopping/account.jsx";
import ShoppingCheckout from "./pages/shopping/checkout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "auth",
        element: <AuthLayout />,
        children: [
          { path: "login", element: <AuthLogin /> },
          { path: "register", element: <AuthRegister /> },
        ],
      },
      {
        path: "admin",
        element: <AdminLayout />,
        children: [
          { path: "dashboard", element: <AdminDashboard /> },
          { path: "features", element: <AdminFeatures /> },
          { path: "orders", element: <AdminOrders /> },
          { path: "products", element: <AdminProducts /> },
        ],
      },
      {
        path: "shop",
        element: <ShoppingLayout />,
        children: [
          { path: "home", element: <ShoppingHome /> },
          { path: "listing", element: <ShoppingListing /> },
          { path: "account", element: <ShoppingAccount /> },
          { path: "checkout", element: <ShoppingCheckout /> },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);
