import { Outlet } from "react-router-dom";
import { Permission } from "../components/Permission";

export function Root() {
  return (
    <Permission>
      <Outlet />
    </Permission>
  );
}
