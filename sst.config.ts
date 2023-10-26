import { SSTConfig } from "sst";
import { Bus } from "./stacks/Bus";
import { Web } from "./stacks/Web";
import { Database } from "./stacks/Database";
import { Api } from "./stacks/Api";

export default {
  config(_input) {
    return {
      name: "another-abandoned-idea-app",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(Bus).stack(Database).stack(Api).stack(Web);
  },
} satisfies SSTConfig;
