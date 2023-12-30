import { v3, v4 } from "./paths";
import {
  RequestDocument,
  Variables,
  request as gqFetch,
} from "graphql-request";

type RequestOptions = {
  v3?: boolean;
  v4?: boolean;
  method: string;
  query?: Record<string, number | boolean | string>;
  body?: Record<string, string | number | boolean> | FormData;
  headers?: Record<string, string>;
};

function body(data: RequestOptions["body"]) {
  // TODO: check is form data
  if (data) {
    return JSON.stringify(data);
  }

  return data;
}

function query(data: RequestOptions["query"]) {
  let search = "";

  if (data) {
    for (const [key, value] of Object.entries(data)) {
      if (search.length) {
        search += `&${key}=${value}`;
      } else {
        search += `?${key}=${value}`;
      }
    }
  }

  return search;
}

const constructUrl = (path: string, options: RequestOptions) => {
  if (options.v4) return v4 + path;
  return v3 + path;
};

function construct(url: string, options: RequestOptions) {
  let _url = constructUrl(url, options);

  const _options: RequestInit = {
    headers: options.headers,
    method: options.method,
  };

  if (options.body) {
    _options.body = body(options.body);
  }

  if (options.query) {
    _url += query(options.query);
  }

  return {
    url: _url,
    options: _options,
  };
}

export async function request(url: string, options: RequestOptions) {
  const data = construct(url, options);

  return await fetch(data.url, data.options)
    .then((res) => res.json())
    .then((data) => ({ success: true, data } as const))
    .catch((err) => ({ success: false, error: err.message } as const));
}

export async function gqlRequest<T>(props: {
  document: RequestDocument;
  requestHeaders: Record<string, string>;
  variables?: Variables;
}) {
  // TODO: remove from here
  // TODO: MOve to env
  return await gqFetch<T>({ url: "http://localhost:8080", ...props });
}
