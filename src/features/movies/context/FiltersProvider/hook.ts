import { useContext } from "react";
import { Context } from "./context";

export function useFilter() {
  return useContext(Context);
}
