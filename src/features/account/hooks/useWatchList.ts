import useSWR from "swr";
import { useAuthContext } from "../../../context/AuthContext";
import { getWatchListMovies } from "../../../api/account";
import { GET_WATCH_LIST } from "../../../api/account/query";

export function useWatchListMovies() {
  const auth = useAuthContext();
  const results = useSWR<GetWatchListMovies>(GET_WATCH_LIST, () => {
    return getWatchListMovies({
      accountId: auth.accountId,
      sessionId: auth.sessionId,
      token: auth.accessToken,
    });
  });

  return {
    ...results,
    data: results.data ? results.data.watchList : { results: [] },
  };
}
