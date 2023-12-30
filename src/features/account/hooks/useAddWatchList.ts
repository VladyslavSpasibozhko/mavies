import { addWatchList } from "@api/account";
import { ADD_TO_WATCH_LIST } from "@api/account/query";
import { AddWatchListInput } from "@api/config/graphql";
import { useAuthContext } from "@context/AuthContext";
import useSWRMutation from "swr/mutation";

export function useAddWatchList() {
  const auth = useAuthContext();

  return useSWRMutation(
    ADD_TO_WATCH_LIST,
    (_, { arg }: { arg: AddWatchListInput }) => {
      return addWatchList({
        account_id: auth.accountId as string,
        session_id: auth.sessionId,
        token: auth.accessToken,
        input: arg,
      });
    }
  );
}
