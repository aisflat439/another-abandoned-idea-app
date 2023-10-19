import { initTRPC, TRPCError } from "@trpc/server";
import { z } from "zod";
import type { Context } from "./context";

import { listTopFive } from "../../../core/src/top";

export const t = initTRPC.context().create();

// export const middleware = t.middleware;
// export const publicProcedure = t.procedure;

export const appRouter = t.router({
  getItWorks: t.procedure.query(() => {
    return "it works!";
  }),
});

export type AppRouter = typeof appRouter;
