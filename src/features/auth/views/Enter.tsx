import { useState } from "react";
import { createAccessToken, createRequestToken } from "../../../api/auth";
import { useAuthContext } from "../../../context/AuthContext";
// TODO: Move to views

export function Enter() {
  const [token, setToken] = useState("");
  const [requestToken, setRequestToken] = useState("");
  const { setTokenApi, setAccessToken, setAccountId } = useAuthContext();

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    const response = await createRequestToken({ token });

    if (response && response.success) {
      setTokenApi(token);
      setRequestToken(response.data.request_token);
    }
  }

  function onApprove() {
    // TODO: save links to env files
    window.open(
      `https://www.themoviedb.org/auth/access?redirect_to=http://localhost:5173&request_token=${requestToken}`
    );
  }

  async function onCreateAccessToken() {
    const response = await createAccessToken({
      token,
      request_token: requestToken,
    });

    if (response.success) {
      setAccessToken(response.data.access_token);
      setAccountId(response.data.account_id);
    }
  }

  if (requestToken) {
    return (
      <div>
        <h3>Token successfully created</h3>
        <h4>Approve your token via TMDB</h4>
        <button onClick={onApprove}>Approve</button>

        <h3>
          After approval you will be redirected to approval page or use button
          below to enter the website
        </h3>

        <button onClick={onCreateAccessToken}>Go ahead</button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit}>
      <textarea value={token} onChange={(e) => setToken(e.target.value)} />
      <button type="submit">Create</button>
    </form>
  );
}
