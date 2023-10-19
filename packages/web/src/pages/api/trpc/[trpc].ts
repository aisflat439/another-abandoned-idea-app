import { fetchRequestHandler } from '@trpc/server/adapters/fetch'
import type { APIRoute } from 'astro'
import { createContext } from '../../../trpc/server/context'
import { appRouter } from '../../../trpc/server'

export const all: APIRoute = ({ request }) => {
  console.log('request: ', request)
  return fetchRequestHandler({
    endpoint: '/api/trpc',
    req: request,
    router: appRouter,
    createContext,
  })
}
