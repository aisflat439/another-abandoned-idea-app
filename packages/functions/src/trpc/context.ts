import type { inferAsyncReturnType } from "@trpc/server";
import type { FetchCreateContextFnOptions } from "@trpc/server/adapters/fetch";

export function createContext({
  req,
  resHeaders,
}: FetchCreateContextFnOptions) {
  console.log("CONTEXT");
  return { req, resHeaders };
}

export type Context = inferAsyncReturnType<typeof createContext>;
