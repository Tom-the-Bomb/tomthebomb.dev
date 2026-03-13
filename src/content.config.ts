import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "zod";

export const collections = {
  albums: defineCollection({
    loader: glob({ pattern: "**/*.yml", base: "src/content/albums" }),
    schema: ({ image }) =>
      z.object({
        title: z.string(),
        short_description: z.string().optional(),
        description: z.string().optional(),
        cover: image(),
        index: z.number(),
      }),
  }),
};
