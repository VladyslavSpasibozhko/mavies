type FetchResponse<T> = SuccessResponse<T> | FailedResponse;

type SuccessResponse<T> = {
  success: true;
  data: T;
};

type FailedResponse = {
  success: false;
  error: string;
};
