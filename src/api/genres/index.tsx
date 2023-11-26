import { gqlRequest } from "../request";
import { GET_GENRES } from "./query";

export function getGenres({ token }: { token: string | null }) {
  return gqlRequest<GetGenresRes>({
    document: GET_GENRES,
    requestHeaders: {
      Authorization: `Bearer ${token}`,
    },
  });
}
