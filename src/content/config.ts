import { defineCollection, z } from "astro:content";

export const albums = defineCollection({
    type: "data",
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            description: z.string().optional(),
            cover: image(),
        }),
});

export const collections = {
    albums,
};