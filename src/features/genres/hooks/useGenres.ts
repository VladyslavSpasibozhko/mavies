import { getGenres } from "@api/genres";
import { GET_GENRES } from "@api/genres/query";
import { useAuthContext } from "@context/AuthContext";
import useSWR from "swr";

export function useGenres() {
  const auth = useAuthContext();

  return useSWR(GET_GENRES, () => getGenres({ token: auth.accessToken }));
}
