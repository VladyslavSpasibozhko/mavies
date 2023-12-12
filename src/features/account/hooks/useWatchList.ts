import { getWatchListMovies } from "@api/account";
import { GET_WATCH_LIST } from "@api/account/query";
import { useAuthContext } from "@context/AuthContext";
import useSWR from "swr";

export function useWatchListMovies() {
  const auth = useAuthContext();

  const results = useSWR(GET_WATCH_LIST, () => {
    return getWatchListMovies({
      account_id: auth.accountId as string,
      session_id: auth.sessionId,
      token: auth.accessToken,
    });
  });

  return {
    ...results,
    data: results.data ? results.data.watchList : { results: [] },
  };
}
