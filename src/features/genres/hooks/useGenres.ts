import useSWR from "swr";
import { useAuthContext } from "../../../context/AuthContext";
import { GET_GENRES } from "../../../api/genres/query";
import { getGenres } from "../../../api/genres";

export function useGenres() {
  const auth = useAuthContext();

  return useSWR(GET_GENRES, () => getGenres({ token: auth.accessToken }));
}
