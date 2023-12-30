import { GenreListQuery } from "@api/config/graphql";
import { gqlRequest } from "../request";
import { GET_GENRES } from "./query";

export function getGenres({ token }: { token: string | null }) {
  return gqlRequest<GenreListQuery>({
    document: GET_GENRES,
    requestHeaders: {
      Authorization: `Bearer ${token}`,
    },
  });
}
