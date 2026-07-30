import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const momentos = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/momentos" }),
  schema: z.object({
    titulo: z.string(),
    data: z.string(),
    imagem: z.string(),
    ordem: z.number(),
  }),
});

export const collections = { momentos };