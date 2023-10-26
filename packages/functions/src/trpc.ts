import { initTRPC } from "@trpc/server";
import { awsLambdaRequestHandler } from "@trpc/server/adapters/aws-lambda";

import { z } from "zod";

export const t = initTRPC.create();
// Base router and procedure helpers
export const router = t.router;
export const procedure = t.procedure;

export const appRouter = router({
  hello: procedure
    .input(
      z.object({
        text: z.string(),
      })
    )
    .query((opts) => {
      return {
        greeting: `hello ${opts.input.text}`,
      };
    }),
});

// export type definition of API
export type Router = typeof appRouter;

export const handler = awsLambdaRequestHandler({
  router: appRouter,
});
