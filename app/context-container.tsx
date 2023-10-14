"use client"

import { FC, useState } from "react"
import {
  DehydratedState,
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query"

export interface ContextContainerProps {
  state?: DehydratedState
  children: React.ReactNode
}

export const ContextContainer: FC<ContextContainerProps> = ({
  state,
  children,
}) => {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={state}>{children}</Hydrate>
    </QueryClientProvider>
  )
}
