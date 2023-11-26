import { useEffect, useMemo, useReducer, useState } from "react";
import { initial, reducer } from "./state";
import { Context } from "./context";

// TODO: Move to separate file
// TODO: refactor
const setItem = (key: AuthStateKeys, value: unknown) => {
  localStorage.setItem(key, value as string);
};

const getItem = (key: AuthStateKeys) => {
  return localStorage.getItem(key);
};

const getItems = (keys: AuthStateKeys[]) => {
  const result: Record<string, string | null> = {};

  for (const key of keys) {
    const value = getItem(key);

    result[key] = value;
  }

  return result;
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  const [state, dispatch] = useReducer(reducer, initial);

  function setAccountId(payload: SetAccountIdAction["payload"]) {
    setItem("accountId", payload!);
    dispatch({ type: "set_account_id", payload });
  }

  function setSessionId(payload: SetSessionIdAction["payload"]) {
    setItem("sessionId", payload!);
    dispatch({ type: "set_session_id", payload });
  }

  function setAccessToken(payload: SetAccessTokenAction["payload"]) {
    setItem("accessToken", payload!);
    dispatch({ type: "set_access_token", payload });
  }

  function setTokenApi(payload: SetApiTokenAction["payload"]) {
    setItem("apiToken", payload!);
    dispatch({ type: "set_token_api", payload });
  }

  const isLoggedIn = useMemo(() => {
    return (
      Boolean(state.accessToken) &&
      Boolean(state.accountId) &&
      Boolean(state.apiToken)
    );
  }, [state]);

  useEffect(() => {
    const payload = getItems([
      "accessToken",
      "accountId",
      "apiToken",
      "sessionId",
    ]);
    dispatch({ type: "set_initial", payload });
    setLoading(false);
  }, []);

  return (
    <Context.Provider
      value={{
        ...state,
        isLoggedIn,
        setAccountId,
        setSessionId,
        setAccessToken,
        setTokenApi,
      }}
    >
      {loading ? <>...Loading</> : children}
    </Context.Provider>
  );
}
