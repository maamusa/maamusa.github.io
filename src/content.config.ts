// Import utilities from `astro:content`
import { z } from "astro/zod";
import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";

// Define a `type` and `schema` for each collection
const postsCollection = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    readingTime: z.number().optional(),
    external_url: z.string().optional(),
  }),
});
// Export a single `collections` object to register your collection(s)
const projectsCollection = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string(),
    external_url: z.string().optional(),
    image: z.object({
      url: z.string(),
      alt: z.string()
    }).optional()
  }),
});

export const collections = {
  posts: postsCollection,
  projects: projectsCollection,
};
