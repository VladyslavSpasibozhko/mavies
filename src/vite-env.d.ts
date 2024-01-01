/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SERVER_URL: string;
  readonly VITE_TMDB_V3: string;
  readonly VITE_TMDB_V4: string;
  readonly VITE_TMDB_ACCESS: string;
  readonly VITE_TMDB_SIGNUP: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
