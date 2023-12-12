import React from "react";
import { useFilters } from "./state";

type ContextType = ReturnType<typeof useFilters>;

export const Context = React.createContext<ContextType>({} as ContextType);
