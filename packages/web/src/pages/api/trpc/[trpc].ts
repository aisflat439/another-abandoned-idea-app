import { fetchRequestHandler } from '@trpc/server/adapters/fetch'
import type { APIRoute } from 'astro'
import { createContext } from '../../../../../functions/src/trpc/context'
import { appRouter } from '../../../../../functions/src/trpc'

export const all: APIRoute = ({ request }) => {
  console.log('request: ', request)
  return fetchRequestHandler({
    endpoint: '/api/trpc',
    req: request,
    router: appRouter,
    createContext,
  })
}
