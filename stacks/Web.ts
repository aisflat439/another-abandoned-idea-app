import { StackContext, NextjsSite } from "sst/constructs";

export function Web({ stack }: StackContext) {
  const site = new NextjsSite(stack, "web", {
    path: "packages/web",
  });

  stack.addOutputs({
    url: site.url,
  });
}
