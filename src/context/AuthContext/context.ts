import { createContext } from "react";
import { initial } from "./state";

export const Context = createContext<AuthContext>(initial as AuthContext);
