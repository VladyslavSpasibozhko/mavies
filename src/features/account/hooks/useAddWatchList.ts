import { addWatchList } from "../../../api/account";
import { ADD_TO_WATCH_LIST } from "../../../api/account/query";
import { useAuthContext } from "../../../context/AuthContext";
import useSWRMutation from "swr/mutation";

export function useAddWatchList() {
  const auth = useAuthContext();
  return useSWRMutation(
    ADD_TO_WATCH_LIST,
    (_: string, { arg }: { arg: AddWatchListInput }) => {
      return addWatchList({
        accountId: auth.accountId,
        sessionId: auth.sessionId,
        token: auth.accessToken,
        input: arg,
      });
    }
  );
}
