import { z } from 'zod';
import { resourceRequestSchema } from '@/server/schemas/createResource';
import { folderTypeSchema } from '@/server/schemas/folder';

export const createFolderRequestSchema = folderTypeSchema
  .extend(resourceRequestSchema.shape)
  .extend({
    parent_id: z.string().uuid().nullable().optional().default(null),
  });

export type CreateFolderRequestType = z.output<typeof createFolderRequestSchema>;
