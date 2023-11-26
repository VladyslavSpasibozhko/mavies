import useSWR from "swr";
import { useAuthContext } from "../../../context/AuthContext";
import { GET_USER } from "../../../api/account/query";
import { getUser } from "../../../api/account";

export function useUser() {
  const auth = useAuthContext();
  return useSWR<{ user: User }>(GET_USER, () => {
    return getUser({
      accountId: auth.accountId,
      sessionId: auth.accountId,
      token: auth.accessToken,
    });
  });
}
