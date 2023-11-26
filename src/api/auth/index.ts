import { request } from "../request";

// TODO: Specify response types
export async function createAccessToken({
  request_token,
  token,
}: CreateAccessTokenParams) {
  return await request("auth/access_token", {
    v4: true,
    method: "POST",
    body: { request_token },
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function createRequestToken({ token }: CreateRequestTokenParams) {
  return await request("auth/request_token", {
    v4: true,
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function validateToken(token: string) {
  return await request("authentication", {
    v3: true,
    method: "GET",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function logout({ access_token, token }: LogoutParams) {
  return await request("auth/access_token", {
    v4: true,
    method: "DELETE",
    body: { access_token },
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}
