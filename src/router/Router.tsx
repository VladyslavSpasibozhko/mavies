import { RouterProvider } from "react-router-dom";
import { router } from "./config";

export function Router() {
  return <RouterProvider router={router} />;
}
