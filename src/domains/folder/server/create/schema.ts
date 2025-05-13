import { z } from 'zod';

export const createFolderRequestSchema = z.object({
  type: z.enum(['voca_library', 'voca_test', 'grammar_library', 'grammar_test']),
  name: z.string().min(1),
  parent_id: z.string().uuid().nullable().optional().default(null),
  is_favorited: z.boolean().optional().default(false),
  is_published: z.boolean().optional().default(false),
  tag: z.array(z.string()).nullable().optional().default(null),
});

export const createFolderResponseSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  created_at: z.string().datetime(),
});

export type CreateFolderRequest = z.output<typeof createFolderRequestSchema>;
export type CreateFolderResponse = z.output<typeof createFolderResponseSchema>;
