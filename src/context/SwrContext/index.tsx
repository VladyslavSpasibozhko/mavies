import { SWRConfig } from "swr";

export function SwrContext({ children }: { children: React.ReactNode }) {
  return (
    <SWRConfig
      value={{
        refreshInterval: 0,
        // revalidateOnReconnect: false,
        // refreshWhenHidden: false,
        // revalidateIfStale: false,
        // revalidateOnFocus: false,
        // revalidateOnMount: false,
      }}
    >
      {children}
    </SWRConfig>
  );
}
