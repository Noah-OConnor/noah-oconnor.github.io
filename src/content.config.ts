import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
    loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
    schema: z.object({
        slug: z.string(),
        hidden: z.boolean().default(false),
        title: z.string(),
        description: z.string(),

        engine: z.string(),
        language: z.string().optional(),
        perspective: z.string().optional(),
        genre: z.string().optional(),
        role: z.string(),
        status: z.string(),
        team: z.string().optional(),
        timeline: z.string().optional(),
        sidebar: z.object({
            technologiesHeading: z.string().optional(),
            engine: z.string().optional(),
            language: z.string().optional(),
            role: z.string().optional(),
            technologies: z.array(z.string()).optional(),
            specialties: z.array(z.string()).optional(),
        }).optional(),
        specialties: z.array(z.string()).default([]),
        technologies: z.array(z.string()).default([]),

        coverImage: z.string(),
        backgroundImage: z.string().optional(),
        
        media: z
            .array(
                z.discriminatedUnion("type", [
                    z.object({
                        type: z.literal("image"),
                        imgSrc: z.string(),
                        alt: z.string().optional(),
                    }),
                    z.object({
                        type: z.literal("video"),
                        src: z.string(),
                        imgSrc: z.string(),
                        title: z.string().optional(),
                    }),
                ])
            )
            .default([]),

        sections: z
            .array(
                z.object({
                    title: z.string(),
                    items: z.array(
                        z.discriminatedUnion("type", [
                            z.object({
                                type: z.literal("text"),
                                body: z.string(),
                            }),
                            z.object({
                                type: z.literal("image"),
                                src: z.string(),
                                alt: z.string().optional(),
                                caption: z.string().optional(),
                            }),
                            z.object({
                                type: z.literal("gif"),
                                src: z.string(),
                                alt: z.string().optional(),
                                caption: z.string().optional(),
                            }),
                            z.object({
                                type: z.literal("videoFile"),
                                src: z.string(),
                                alt: z.string().optional(),
                                caption: z.string().optional(),
                            }),
                        ])
                    ),
                })
            )
            .default([]),
        
        links: z.array(
            z.object({
                label: z.string(),
                url: z.string(),
            })
        ).optional()
    }),
});

export const collections = {
    projects,
};
