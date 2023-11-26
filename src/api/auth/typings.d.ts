type CreateAccessTokenParams = {
  token: string;
  request_token: string;
};

type CreateRequestTokenParams = {
  token: string;
};

type LogoutParams = {
  token: string;
  access_token: string;
};
