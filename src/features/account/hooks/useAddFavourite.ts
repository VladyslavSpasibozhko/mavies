import useSWRMutation from "swr/mutation";
import { addFavorite } from "../../../api/account";
import { useAuthContext } from "../../../context/AuthContext";
import { ADD_TO_FAVORITE } from "../../../api/account/query";

export function useAddFavorite() {
  const auth = useAuthContext();

  return useSWRMutation(
    ADD_TO_FAVORITE,
    (_: string, { arg }: { arg: AddFavoriteInput }) => {
      return addFavorite({
        accountId: auth.accountId,
        sessionId: auth.sessionId,
        token: auth.accessToken,
        input: arg,
      });
    }
  );
}
