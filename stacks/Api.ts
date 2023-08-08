import { StackContext, use, Api as ApiGateway, Config } from "sst/constructs";

export function Api({ stack }: StackContext) {
  const api = new ApiGateway(stack, "api", {
    defaults: {
      function: {},
    },
    // prettier-ignore
    routes: {
      "GET    /":               "packages/functions/src/lambda.handler",
      "GET    /todo":           "packages/functions/src/todo.list",
      "POST   /todo":           "packages/functions/src/todo.create",
      "GET    /trpc/{proxy+}":  "packages/functions/src/trpc.handler",
      "POST   /trpc/{proxy+}":  "packages/functions/src/trpc.handler",
    },
  });

  stack.addOutputs({
    API_URL: api.url,
  });

  return api;
}
