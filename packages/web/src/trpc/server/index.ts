import { initTRPC } from '@trpc/server'
// import { z } from "zod";
// import type { Context } from "./context";

export const t = initTRPC.create()

// export const middleware = t.middleware;
// export const publicProcedure = t.procedure;

export const appRouter = t.router({
  getItWorks: t.procedure.query(() => {
    return 'it works!'
  }),
})

export type AppRouter = typeof appRouter
