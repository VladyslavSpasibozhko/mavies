import { addFavorite } from "@api/account";
import { ADD_TO_FAVORITE } from "@api/account/query";
import { AddFavoriteInput } from "@api/gql/graphql";
import { useAuthContext } from "@context/AuthContext";
import useSWRMutation from "swr/mutation";

export function useAddFavorite() {
  const auth = useAuthContext();

  return useSWRMutation(
    ADD_TO_FAVORITE,
    (_, { arg }: { arg: AddFavoriteInput }) => {
      return addFavorite({
        account_id: auth.accountId as string,
        session_id: auth.sessionId,
        token: auth.accessToken as string,
        input: arg,
      });
    }
  );
}
