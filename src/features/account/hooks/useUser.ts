import useSWR from "swr";
import { useAuthContext } from "@context/AuthContext";
import { GET_USER } from "@api/account/query";
import { getUser } from "@api/account";

export function useUser() {
  const auth = useAuthContext();

  return useSWR(GET_USER, () => {
    return getUser({
      account_id: auth.accountId as string,
      token: auth.accessToken,
    });
  });
}
