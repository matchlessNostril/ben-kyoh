import { z } from 'zod';

export const fileSchema = z.object({
  id: z.string().uuid(),
  folder_id: z.string().uuid().nullable(),
  name: z.string(),
  is_favorited: z.boolean(),
  is_published: z.boolean(),
  tags: z.array(z.string()),
  created_at: z.date(),
});

export type FileType = z.infer<typeof fileSchema>;
