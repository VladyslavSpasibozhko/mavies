import React from "react";
import { useFilters } from "./state";
import { Context } from "./context";

type Props = {
  children: React.ReactNode;
};

export function FiltersProvider({ children }: Props) {
  const filters = useFilters();
  return <Context.Provider value={filters}>{children}</Context.Provider>;
}
