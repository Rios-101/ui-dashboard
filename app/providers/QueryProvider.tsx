/**
 * QueryProvider — client component wrapping the app with React Query.
 *
 * Uses `useState` to create the QueryClient so each SSR request gets its own
 * instance (avoids sharing state between requests).
 *
 * All auto-refetch is DISABLED globally — queries only fire when explicitly
 * triggered by the developer (e.g., via `refetch()`, `enabled` flag, or mutations).
 */
"use client";

import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function QueryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
            refetchOnMount: false,
            retry: false,
            staleTime: Infinity,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
