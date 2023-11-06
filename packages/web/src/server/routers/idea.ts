/**
 *
 * This is an example router, you can delete this file and then update `../pages/api/trpc/[trpc].tsx`
 */
import { router, publicProcedure } from "../trpc";
// import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { createIdea, sayHello } from "../../../../core/src/idea";

export const ideaRouter = router({
  list: publicProcedure
    .input(
      z.object({
        name: z.string().min(3).max(255),
      })
    )
    .query(async ({ input }) => {
      const yee = await sayHello({ name: input.name });
      return {
        yee,
      };
    }),
  createIdea: publicProcedure
    .input(
      z.object({
        description: z.string(),
        ideaName: z.string(),
        submittedBy: z.string(),
        tagline: z.string(),
        twitterAccount: z.string(),
        url: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      return await createIdea({
        description: input.description,
        ideaName: input.ideaName,
        submittedBy: input.submittedBy,
        tagline: input.tagline,
        twitterAccount: input.twitterAccount,
        url: input.url,
      });
    }),
});
