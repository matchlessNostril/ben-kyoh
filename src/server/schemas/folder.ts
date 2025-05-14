import { z } from 'zod';

export const folderTypeSchema = z.object({
  type: z.enum(['voca_library', 'voca_test', 'grammar_library', 'grammar_test']),
});

export const folderSchema = z.object({
  id: z.string().uuid(),
  parent_id: z.string().uuid().nullable(),
  name: z.string(),
  is_favorited: z.boolean(),
  is_published: z.boolean(),
  tags: z.array(z.string()),
  created_at: z.date(),
});

export type FolderType = z.infer<typeof folderSchema>;
