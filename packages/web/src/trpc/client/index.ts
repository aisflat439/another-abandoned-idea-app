import { createTRPCProxyClient, httpBatchLink } from '@trpc/client'
import type { AppRouter } from '../server'

const trpcAstro = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:4321/api/trpc',
    }),
  ],
})

export { trpcAstro }
