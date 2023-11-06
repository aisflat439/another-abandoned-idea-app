/**
 * This file contains the root router of your tRPC-backend
 */
import { publicProcedure, router } from "../trpc";
import { ideaRouter } from "./idea";

export const appRouter = router({
  healthcheck: publicProcedure.query(() => "yay!"),
  idea: ideaRouter,
});

export type AppRouter = typeof appRouter;
