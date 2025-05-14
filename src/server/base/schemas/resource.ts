import { z } from 'zod';

// Folder & File 共通スキマ
export const resourceRequestSchema = z.object({
  name: z.string().min(1),
  is_favorited: z.boolean().optional().default(false),
  is_published: z.boolean().optional().default(false),
  tags: z.array(z.string()).optional().default([]),
});

export const resourceResponseSchema = z
  .object({
    id: z.string().uuid(),
    name: z.string(),
    created_at: z.date(),
  })
  .transform((data) => {
    return {
      id: data.id,
      name: data.name,
      created_at: data.created_at.toISOString(),
    };
  });
