import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const recipes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/recipes' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    prepTime: z.number(),
    cookTime: z.number(),
    servings: z.number(),
    category: z.enum(['breakfast', 'lunch', 'dinner', 'dessert', 'snack', 'drink', 'side']),
    tags: z.array(z.string()),
    difficulty: z.enum(['easy', 'medium', 'involved']),
    source: z.string(),
    favorite: z.boolean().default(false),
    image: z.string().optional(),
    macros: z.object({
      calories: z.number(),
      protein: z.number(),
      carbs: z.number(),
      fat: z.number(),
    }).optional(),
  }),
});

export const collections = { recipes };
