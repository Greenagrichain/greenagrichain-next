"use client";
import React from "react";
import { AuthContextProvider } from "@/lib/authContext";
import { SWRConfig } from "swr";
import { axiosFetcher } from "@/lib/axiosInstance";

export default function Providers({ children }) {
  return (
    <AuthContextProvider>
      <SWRConfig
        value={{
          // revalidateOnFocus: false,
          // revalidateOnMount: true,
          // revalidateOnReconnect: false,
          // refreshWhenOffline: false,
          // refreshWhenHidden: false,
          // refreshInterval: 1 * 60 * 1000,
          fetcher: axiosFetcher,
        }}
      >
        {children}
      </SWRConfig>
    </AuthContextProvider>
  );
}
