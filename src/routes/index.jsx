import { createBrowserRouter, RouterProvider } from "react-router";

import Layout from "../layout";

//------------------------------------------------------------------------------

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
