export const initial: AuthState = {
  isLoggedIn: false,
  accessToken: null,
  accountId: null,
  apiToken: null,
  sessionId: null,
};

export function reducer(state: AuthState, action: AuthActions) {
  const setState = (state: AuthState, data: Partial<AuthState>) => {
    return {
      ...state,
      ...data,
    };
  };

  if (action.type === "set_account_id") {
    return setState(state, { accountId: action.payload });
  }

  if (action.type === "set_access_token") {
    return setState(state, { accessToken: action.payload });
  }

  if (action.type === "set_session_id") {
    return setState(state, { sessionId: action.payload });
  }

  if (action.type === "set_token_api") {
    return setState(state, { apiToken: action.payload });
  }

  if (action.type === "set_initial") {
    return setState(state, action.payload);
  }

  return state;
}
