import { useContext } from "react";
import { Context } from "./context";

export function useAuthContext() {
  return useContext(Context);
}
