import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { parseSearchParams } from "../../../utils/url";
import { createAccessToken } from "../../../api/auth";
import { useAuthContext } from "../../../context/AuthContext";

// TODO: Move to views
export function Approve() {
  const location = useLocation();
  const { apiToken, setAccessToken, setAccountId } = useAuthContext();

  const [requestToken, setRequestToken] = useState("");

  async function onCreateAccessToken() {
    if (!apiToken) return;

    const response = await createAccessToken({
      token: apiToken,
      request_token: requestToken,
    });

    if (response.success) {
      setAccessToken(response.data.access_token);
      setAccountId(response.data.account_id);
    }
  }

  useEffect(() => {
    const params = parseSearchParams(location.search);

    if (params.request_token) {
      setRequestToken(params.request_token);
    }
  }, [location.search]);

  if (requestToken) {
    return (
      <div>
        <h3>Your token successfully approved</h3>
        <h4>Use button below to enter the website</h4>
        <button onClick={onCreateAccessToken}>Go ahead</button>
      </div>
    );
  }

  return <div>Approve</div>;
}
