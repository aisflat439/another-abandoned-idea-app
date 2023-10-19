import { StackContext, use, Api as ApiGateway, Config } from "sst/constructs";
import { Database } from "./Database";

export function Api({ stack }: StackContext) {
  const github = Config.Secret.create(
    stack,
    "GITHUB_CLIENT_SECRET",
    "GITHUB_CLIENT_ID"
  );

  const db = use(Database);

  const api = new ApiGateway(stack, "api", {
    customDomain:
      stack.stage === "prod" ? "api.abandonedproductshunt.com" : undefined,
    defaults: {
      function: {
        bind: [db, ...Object.values(github)],
      },
    },
    routes: {
      "GET /hello": "packages/functions/src/hello.handler",
    },
  });

  stack.addOutputs({
    API_URL: api.customDomainUrl || api.url,
  });

  return api;
}
