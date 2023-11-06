import { StackContext, NextjsSite, use } from "sst/constructs";
import { Database } from "./Database";

export function Web({ stack }: StackContext) {
  const db = use(Database);

  const site = new NextjsSite(stack, "web", {
    path: "packages/web",
    bind: [db],
  });

  stack.addOutputs({
    url: site.url,
  });
}
