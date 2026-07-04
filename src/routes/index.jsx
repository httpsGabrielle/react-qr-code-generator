import { createBrowserRouter } from "react-router-dom";
import QrcodePage from "../pages/QrcodePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <QrcodePage />,
  },
]);

export default router;
