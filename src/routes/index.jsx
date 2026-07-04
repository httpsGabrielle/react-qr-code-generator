import { createBrowserRouter } from "react-router-dom";

// Layout
import Layout from "../layout";

// Pages
import QrcodePage from "../pages/QrcodePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <QrcodePage />,
      },
    ],
  },
]);

export default router;
