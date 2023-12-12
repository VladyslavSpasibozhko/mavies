import { getFavoriteMovies } from "@api/account";
import { GET_FAVORITE } from "@api/account/query";
import { useAuthContext } from "@context/AuthContext";
import useSWR from "swr";

export function useFavoriteMovies() {
  const auth = useAuthContext();

  const results = useSWR(GET_FAVORITE, () => {
    return getFavoriteMovies({
      account_id: auth.accountId as string,
      token: auth.accessToken as string,
      session_id: auth.sessionId,
    });
  });

  return {
    ...results,
    data: results.data ? results.data.favorite : { results: [] },
  };
}
