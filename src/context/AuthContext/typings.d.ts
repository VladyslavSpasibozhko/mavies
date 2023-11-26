type AuthState = {
  isLoggedIn: boolean;
  accountId: string | null;
  apiToken: string | null;
  accessToken: string | null;
  sessionId: string | null;
};

type AuthStateKeys = keyof AuthState;

type AuthContext = AuthState & {
  setAccountId: (payload: SetAccountIdAction["payload"]) => void;
  setSessionId: (payload: SetSessionIdAction["payload"]) => void;
  setAccessToken: (payload: SetAccessTokenAction["payload"]) => void;
  setTokenApi: (payload: SetApiTokenAction["payload"]) => void;
};

type SetAccountIdAction = {
  type: "set_account_id";
  payload: string | null;
};

type SetSessionIdAction = {
  type: "set_session_id";
  payload: string | null;
};

type SetAccessTokenAction = {
  type: "set_access_token";
  payload: string | null;
};

type SetApiTokenAction = {
  type: "set_token_api";
  payload: string | null;
};

type SetInitial = {
  type: "set_initial";
  payload: Partial<AuthState>;
};

type AuthActions =
  | SetAccountIdAction
  | SetAccessTokenAction
  | SetApiTokenAction
  | SetSessionIdAction
  | SetInitial;
