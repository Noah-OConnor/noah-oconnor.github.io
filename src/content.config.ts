import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
    loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
    schema: z.object({
        slug: z.string(),
        title: z.string(),
        description: z.string(),

        engine: z.string(),
        language: z.string().optional(),
        perspective: z.string().optional(),
        genre: z.string().optional(),
        role: z.string(),
        status: z.string(),

        thumbnail: z.string(),
        heroImage: z.string(),
        coverImage: z.string().optional(),

        screenshots: z.array(z.string()).default([]),

        links: z
            .object({
                github: z.string().optional(),
                itch: z.string().optional(),
                steam: z.string().optional(),
                trailer: z.string().optional(),
            })
            .optional(),
    }),
});

export const collections = {
    projects,
};