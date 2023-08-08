import { StackContext, use, StaticSite } from "sst/constructs";
import { Api } from "./Api";

export function Web({ stack }: StackContext) {
  const api = use(Api);

  const site = new StaticSite(stack, "site", {
    buildOutput: "dist",
  });

  stack.addOutputs({
    url: site.url,
  });

  return Web;
}
