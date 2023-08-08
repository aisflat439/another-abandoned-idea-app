import { SSTConfig } from "sst";
import { Bus } from "./stacks/Bus";
import { Api } from "./stacks/Api";
import { Web } from "./stacks/Web";

export default {
  config(_input) {
    return {
      name: "another-abandoned-idea-app",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(Api).stack(Bus).stack(Web);
  },
} satisfies SSTConfig;
