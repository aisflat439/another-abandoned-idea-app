import { StackContext, use, AstroSite } from "sst/constructs";

export function Web({ stack }: StackContext) {
  const site = new AstroSite(stack, "web", {
    path: "packages/web",
  });

  stack.addOutputs({
    url: site.url,
  });
}
