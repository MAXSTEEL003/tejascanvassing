import { createBrowserRouter } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "*",
        Component: () => <div className="min-h-screen flex items-center justify-center text-xl text-stone-600 font-serif">404 - Page Not Found</div>,
      }
    ],
  },
]);
