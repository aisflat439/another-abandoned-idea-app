import { Entity, EntityItem } from "electrodb";

export const IdeaEntity = new Entity({
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
    votes: {
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
      index: "gsi1pk",
      pk: {
        field: "gsi1pk",
        composite: ["submittedOn"],
      },
      sk: {
        field: "gsi2pk",
        composite: ["upvotes"],
      },
    },
    date: {
      index: "gsi3pk",
      pk: {
        field: "gsi3pk",
        composite: ["date"],
      },
      sk: {
        field: "gsi3sk",
        composite: ["upvotes"],
      },
    },
    submittedBy: {
      index: "gsi2pk",
      pk: {
        field: "gsi2pk",
        composite: ["submittedBy"],
      },
      sk: {
        field: "gsi2sk",
        composite: ["upvotes"],
      },
    },
  },
});

export type TIdeaEntity = EntityItem<typeof IdeaEntity>;

export async function createIdea({
  description,
  ideaId,
  ideaName,
  submittedBy,
  tagline,
  twitterAccount,
  url,
  votes,
}: TIdeaEntity) {
  const idea = await IdeaEntity.create({
    ideaId,
    url,
    submittedOn: new Date().toISOString(),
    submittedBy,
    ideaName,
    tagline,
    twitterAccount,
    description,
    votes,
  }).go();

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
