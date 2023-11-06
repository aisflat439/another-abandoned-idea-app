import { Entity, EntityItem } from "electrodb";
import { Dynamo } from "./dynamo";

export const IdeaEntity = new Entity(
  {
    model: {
      version: "1",
      entity: "Idea",
      service: "idea",
    },
    attributes: {
      ideaId: {
        type: "string",
        required: true,
        readOnly: true,
      },
      url: {
        type: "string",
        required: true,
      },
      submittedOn: {
        type: "string",
        required: true,
      },
      submittedBy: {
        type: "string",
        required: true,
      },
      ideaName: {
        type: "string",
        required: true,
      },
      tagline: {
        type: "string",
        required: true,
      },
      twitterAccount: {
        type: "string",
        required: false,
      },
      description: {
        type: "string",
        required: true,
      },
      upvotes: {
        type: "number",
        required: true,
      },
    },
    indexes: {
      ideas: {
        pk: {
          field: "pk",
          composite: ["url"],
        },
        sk: {
          field: "sk",
          composite: ["submittedOn"],
        },
      },
      upvotes: {
        index: "gsi1",
        pk: {
          field: "gsi1pk",
          composite: ["submittedOn"],
        },
        sk: {
          field: "gsi1sk",
          composite: ["upvotes"],
        },
      },
      submittedBy: {
        index: "gsi2",
        pk: {
          field: "gsi2pk",
          composite: ["submittedBy"],
        },
        sk: {
          field: "gsi2sk",
          composite: ["upvotes"],
        },
      },
      submittedOn: {
        index: "gsi3",
        pk: {
          field: "gsi3pk",
          composite: ["submittedOn"],
        },
        sk: {
          field: "gsi3sk",
          composite: ["upvotes"],
        },
      },
    },
  },
  Dynamo.Configuration
);

export type TIdeaEntity = EntityItem<typeof IdeaEntity>;
type CreateIdea = Omit<TIdeaEntity, "submittedOn" | "ideaId" | "upvotes">;

export async function createIdea({
  description,
  ideaName,
  submittedBy,
  tagline,
  twitterAccount,
  url,
}: CreateIdea) {
  const idea = await IdeaEntity.create({
    ideaId: new Date().toISOString(),
    url,
    submittedOn: new Date().toISOString(),
    submittedBy,
    ideaName,
    tagline,
    twitterAccount,
    description,
    upvotes: 0,
  }).go();

  return idea.data;
}

export async function sayHello({ name }: { name: string }) {
  return `Hello ${name}`;
}

export async function checkIfUrlExists({ url }: { url: string }) {
  const idea = await IdeaEntity.query.ideas({ url }).go();
  console.log("idea: ", idea);

  return idea.data;
}

export async function getByUrl({ url }: { url: string }) {
  const idea = await IdeaEntity.query.ideas({ url }).go();

  return idea.data;
}

export async function listByUpvotes({ submittedOn }: { submittedOn: string }) {
  const idea = await IdeaEntity.query.upvotes({ submittedOn }).go();

  return idea.data;
}
