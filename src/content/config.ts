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

export interface AlbumT {
    id: string,
    collection: string,
    data: {
        title: string,
        description: string,
        cover: any,
    }
}

export const collections = {
    albums,
};