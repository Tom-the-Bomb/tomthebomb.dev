import { defineCollection, z } from 'astro:content';

export const albums = defineCollection({
    type: 'data',
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            short_description: z.string().optional(),
            description: z.string().optional(),
            cover: image(),
            index: z.number(),
        }),
});

export const collections = {
    albums,
};