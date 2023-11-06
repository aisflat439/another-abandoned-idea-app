import { StackContext, use, Api as ApiGateway, Config } from "sst/constructs";
import { Database } from "./Database";

export function Api({ stack }: StackContext) {
  const db = use(Database);

  const api = new ApiGateway(stack, "api", {
    customDomain:
      stack.stage === "prod" ? "api.abandonedproductshunt.com" : undefined,
    defaults: {
      function: {
        bind: [db],
      },
    },
    routes: {
      "GET /trpc/{proxy+}": "packages/functions/src/trpc.handler",
      "POST /trpc/{proxy+}": "packages/functions/src/trpc.handler",
    },
  });

  stack.addOutputs({
    API_URL: api.customDomainUrl || api.url,
  });

  return api;
}
