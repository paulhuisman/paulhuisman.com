import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    role: z.string(),
    period: z.string(),
    description: z.string(),
    url: z.string().optional(),
    isInternalApp: z.boolean().optional(),
    order: z.number(),
    images: z.string().array().optional(),
  }),
});

export const collections = {
  projects: projectsCollection,
};
