import * as trpcNext from "@trpc/server/adapters/next";
import { appRouter } from "../../../../functions/src/trpc";

// export API handler
// @see https://trpc.io/docs/server/adapters
export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => ({}),
});
